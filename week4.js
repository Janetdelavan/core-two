var images= [
    "https://qg1pwcso2l-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/passenger_interior-2.jpg",
    "https://qg1pwcso2l-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/driver_front_34.jpg",
    "https://qg1pwcso2l-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/driver-dash.jpg",
    "https://qg1pwcso2l-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/passenger_dash-1.jpg",
    "https://qg1pwcso2l-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/speedi.jpg",
    "https://qg1pwcso2l-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/driver_rear_34-1.jpg",
    "https://qg1pwcso2l-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/front-2.jpg"]

    var num=0;

function next()
{
  var slider =document.getElementById('slide');
  num++;
  if(num>=images.length)
  {
    num=0;
  }
  slider.src=images[num];
}

function previous()
{
  var slider =document.getElementById('slide');
  num--;
  if(num<0)
  {
    num=images.length-1;
  }
  slider.src=images[num];
}