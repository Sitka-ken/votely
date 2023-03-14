import React from 'react';
const votationCard=()=> {
  return (
   <>
        
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center ">
        <div className="contenedor w-2/5 justify-center items-center mt-8 mr-6 mb-6 h-auto" >

          <div className="prin h-auto rounded-sm border-solid" style={{backgroundColor:'#161515', border: '1px solid #999999'}}>
            <div className="h-full w-full">
              <div className="h-2/3 w-ful" style={{border:'1px',
              borderStyle: 'solid',
              borderColor: '#999999'}}></div>

            </div>

            <div className="Candidate"
              style={{backgroundColor: '#161515' ,padding: '20px', display: 'flex', alignItems: 'center', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'}}>
              <div className="w-1/5 h-24">
                <img src="/public/img/images/GRIZZLYE.jpg" alt=""
                  className="w-full h-full md:h-auto min-h-max rounded-lg bg-gray-300 object-fill md:object-center"
                  style={{height:'80%'}}/>
              </div>
              <div className="Candidate_info" style={{color: '#CCCCCC',flex: '1', marginLeft: '20px'}}>
                <h3 className="Candidate_name"
                  style={{fontSize:'20px',marginTop:'0', marginBottom:'10px',fontWeight:'bold'}}>Proyect Name</h3>
                <p className="Candidate_description" style={{fontSize:'16px' ,marginTop:'0' ,marginBottom: '10px'}}>Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Enim earum, soluta, fugiat in cumque quo simili.
                </p>

              </div>
            </div>

          </div>
          <div className="divP w-full h-7 flex " >
            <div className="prin2 w-2/5 h-full border-t-0 border-r-0" style={{backgroundColor:'#161515',
          border: '1px',
          borderStyle: 'solid',
          borderColor:'#999999',
          borderTop: '0ch',
          borderRight: '0ch'}}>
          
              <div className="justify-center text-center cursor-pointer">
                <a href="#" className="open-modal"> 
                <h3 className="font-semibold text-white text-xl">
                  Evaluate
                </h3>
              </a>
              </div>
            
            </div>
            <div className="prin3 h-full w-1/6" style={{ backgroundColor:'#161515' ,border:`1px`,borderStyle:'solid',borderColor:'#999999' ,borderTop:'0ch' ,borderLeft:'0ch' ,transform:'skew(-30deg)'}} >

            </div>
          </div>
        </div>
        
      </div>

      <div id="myModal" className="fixed  inset-0 overflow-y-auto hidden mt-20" >
        {

      }
      </div>
      <script src="./modal2Open.js"></script>
   </>
  );
}

export default votationCard;