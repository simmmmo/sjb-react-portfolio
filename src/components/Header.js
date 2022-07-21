import '../assets/styles/Header.css'
import Navbar from './Navbar'


export default function Header({ currentPage, handlePageChange }) {
  return (

      <div className="header-section">
       <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        
    
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="intro">
                <h2>Full Stack Portfolio</h2>
                
							<p>Currently studying Full Stack Developement through Monash University Coding Boot Camp. Learning front-end and back-end technologies including HTML5, CSS3, JavaScript, jQuery, Java, MERN Stack, MySQL and Git. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
