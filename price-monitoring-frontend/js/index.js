// const serverAddress = "http://104.131.165.92:8081"
// var productDetail;
// document.addEventListener('DOMContentLoaded', function() {

//   // When price condition is changed
//   $('select#condition').on('change', function() {
//     // If the user has selected "Less than current price"
//     // We assign greaterThanInput value to  0
//     // and set the lessThanInput value to current price of the product
//     if ($('#condition').val() == "lessThanCurrent") {
//       $('#greaterThanInput').val(0);
//       $('#lessThanInput').val(productDetail.price);
//       $('#greaterThanInput').attr('readonly', 'true');
//     }
//     // If the user has selected "Fixed price"
//     // We assign greaterThanInput value to be price entered by user
//     // and set the lessThanInput value to be price entered by user
//     else if ($('#condition').val() == "fixedPrice") {
//       $('#greaterThanInput').val(productDetail.price);
//       $('#greaterThanInput').val(productDetail.price);
//       $('#greaterThanInput').removeAttr('readonly');
//     }
//     // If the user has selected "Less than a value"
//     // We assign greaterThanInput value to 0
//     // and set the lessThanInput value to be price entered by user
//     else {
//       $('#greaterThanInput').val(0);
//       $('#greaterThanInput').removeAttr('readonly');
//     }
//   });

//   // On clicking the set alert button, we make a call to our server
//   // Sever indexes the product and set a trigger to send mail when condition is met
//   $('#submit').on('click', function() {
//     var parameters = {
//       'lte': $('#lessThanInput').val(),
//       'gte': $('#greaterThanInput').val(),
//       'email': $('#email').val(),
//       'productId': productDetail.productId
//     }
//     $.ajax({
//       type: 'GET',
//       url: serverAddress + '/alert',
//       data: parameters,
//       success: function(d) {
//         console.log(d);
//       },
//       error: function() {
//         console.log("error");
//       }
//     });
//     alert("You will receive an email, whenever the product price reaches according to you condition.");
//   });

//   $(document).ready(function() {
//     // Get the current tab URL and fetch the product ID
//     getCurrentTabUrl(function(url) {
//       if ($.urlParam('pid', url) != null) {
//         // Fetch the product details from the product ID
//         getProductDetails({ 'productId': $.urlParam('pid', url) }, function(data) {
//           //  Display the product details in the extension
//           productDetail = data;
//           $('#name').text(productDetail.name);
//           $('#current_price').text(productDetail.price);
//           var imageURL;
//           for (var key in productDetail.imageurls) {
//             imageURL = productDetail.imageurls[key];
//           }
//           $('#img').attr('src', imageURL);
//         });
//       }
//     });
//   });

// });




// function getCurrentTabUrl(callback) {
//   // Query filter to be passed to chrome.tabs.query - see
//   // https://developer.chrome.com/extensions/tabs#method-query
//   var queryInfo = {
//     active: true,
//     currentWindow: true
//   };

//   chrome.tabs.query(queryInfo, function(tabs) {
//     // chrome.tabs.query invokes the callback with a list of tabs that match the
//     // query. When the popup is opened, there is certainly a window and at least
//     // one tab, so we can safely assume that |tabs| is a non-empty array.
//     // A window can only have one active tab at a time, so the array consists of
//     // exactly one tab.
//     var tab = tabs[0];

//     // A tab is a plain object that provides information about the tab.
//     // See https://developer.chrome.com/extensions/tabs#type-Tab
//     var url = tab.url;

//     // tab.url is only available if the "activeTab" permission is declared.
//     // If you want to see the URL of other tabs (e.g. after removing active:true
//     // from |queryInfo|), then the "tabs" permission is required to see their
//     // "url" properties.
//     console.assert(typeof url == 'string', 'tab.url should be a string');

//     callback(url);
//   });

// }



// $.urlParam = function(name,url){
//     var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
//     if (results==null){
//        return null;
//     }
//     else{
//        return results[1] || 0;
//     }
// }


// function getProductDetails(parameters, callback) {
//   $.ajax({
//     type: 'get',
//     url: serverAddress + '/product',
//     data: parameters,
//     success: function(d) {
//       callback(d);
//     },
//     error: function() {
//       console.log("error");
//     }
//   });
// }



// var item_template=" <li class='{{class}}'>{{num}}.{{name}}({{date}})</li>"  //要記得把裡面的雙引號改成是單引號

// var data_url="https://awiclass.monoame.com/api/command.php?type=get&name=tododata"

// var tododata;

// $.ajax(
//   {
//     url: data_url,
//     success: function(res){
//       tododata = JSON.parse(res);
//       for(i=0;i<tododata.length;i+=1){
//         var item = tododata[i];
//         var now_class = ""
//         if (item.done == true){
//           now_class="done"
//         }
//         // if的另一種寫法
//         // var now_class = (item.done==true)?"done":"";
//         var now_item = 
//             item_template.replace("{{name}}", item.name)
//                          .replace("{{num}}", i+1)
//                          .replace("{{date}}", item.date)
//                          .replace("{{class}}", now_class);
//         $("#listitem").append(now_item);
//       }
//     }
  
  
//   }
// )
var item_template=" <li class='{{class}}'>{{num}}.{{name}}({{date}})</li>"  //要記得把裡面的雙引號改成是單引號

var data_url="https://awiclass.monoame.com/api/command.php?type=get&name=tododata"

var tododata;

$.ajax(
  {
    url: data_url,
    success: function(res){
      tododata = JSON.parse(res);
      for(i=0;i<tododata.length;i+=1){
        var item = tododata[i];
        var now_class = ""
        if (item.done == true){
          now_class="done"
        }
        // if的另一種寫法
        // var now_class = (item.done==true)?"done":"";
        var now_item = 
            item_template.replace("{{name}}", item.name)
                         .replace("{{num}}", i+1)
                         .replace("{{date}}", item.date)
                         .replace("{{class}}", now_class);
        $("#listitem").append(now_item);
      }
    }
  
  
  }
)