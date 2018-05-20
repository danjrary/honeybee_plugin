from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from elasticsearch import Elasticsearch
from pymongo import MongoClient
from datetime import datetime

# Create your views here.
def compare_price(request):
    data = request.GET
    item = data['item']
    #size, price, item
    item_car = {k:v for k,v in data.items()}
    #size, price, title, productBrand, item
    item_hon = get_item(item)
    res = {
      'honestbee': item_hon,
      'carrefour': item_car
    }
    return JsonResponse(res)

def get_item(item):
    es = Elasticsearch(
      hosts=[{'host': '127.0.0.1', 'port': 9200}],
    )
    res = es.search(index='honestbee',
      doc_type='carrefour',
      body={
        "query": {
          "match": {
            "title": {
              "query":     item,
              "fuzziness": "AUTO"
            }
          }
        }
    })

    res = res['hits']['hits'][0]['_source']
    res = {i:res[i] for i in ['title','productBrand','size','price']}
    res['item'] = '%s%s'%(res['productBrand'],res['title']) if res['productBrand'] is not None else res['title']
    #print('res: ',res)
    return res

def report(request):
    item = request.GET
    item = {k:v for k,v in item.items()} 
    item['tm'] = int(datetime.now().strftime('%s'))
    db = MongoClient().honestbee
    result = db.report.insert_one(item)
    return HttpResponse('')    
