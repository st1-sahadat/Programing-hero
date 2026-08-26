<!--I am not useing AI-->



<!--Our_service_html_file-->
<section class="service_section"> 
<div class="service_containner defult_style">
  <div class="service_contant">
  <p>What I do</p>
  <h2>Our Service</h2> 
  </div>
  <div class="service_item">
    <div class="service_item_list">
      <span class="list_icon"><i class="fa-brands fa-html5"></i></span>
      <p>HTML5 Service</p>
    </div>
    <div class="service_item_list">
      <span class="list_icon"><i class="fa-brands fa-css3-alt"></i></span>
      <p>CSS3 Service</p>
    </div>
    <div class="service_item_list">
      <span class="list_icon"><i class="fa-brands fa-js"></i></span>
      <p>JS Service</p>
    </div>
    <div class="service_item_list">
      <span class="list_icon"><i class="fa-brands fa-opencart"></i></span>
      <p>Opencart Service</p>
    </div>
    <div class="service_item_list">
      <span class="list_icon"><i class="fa-brands fa-joomla"></i></span>
      <p>Joomla Service</p>
    </div>
    <div class="service_item_list">
      <span class="list_icon"><i class="fa-brands fa-wordpress-simple"></i></span>
      <p>Pllugin Develop</p>
    </div>
    <div class="service_item_list">
      <span class="list_icon"><i class="fa-brands fa-android"></i></span>
      <p>Apps Service</p>
    </div>
    <div class="service_item_list">
      <span class="list_icon"><i class="fa-solid fa-life-ring"></i></span>
      <p>24/7 Support</p>
    </div>     
  </div> 
</div>
</section>



/*our service_section_style*/

.service_containner{
  padding: 55px;
}
.service_containner .service_contant{
  text-align: center;
}
.service_contant h2{
  font-size: 2.5rem;
}
.service_item{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
}
.service_item_list {
  background-color: #eee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  padding: 40px 0 40px 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.service_item .service_item_list:hover{
  transform: translateY(-4px); 
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3); 
} 
.list_icon {
  font-size: 4rem;
  margin-bottom: 10px;
  display: inline-block;
} 
.service_item_list p {
  font-size: 1.2rem;
  margin: 0;
  color: #111;
} 
