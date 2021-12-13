import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Aboutme() {
    return (
        <div>
            <Row className='Font-Style'  >
                <Col sm={6} style={{textAlign:'Center'}}>
                    <h1 >Hi, I am Vivek Singh</h1>
                    <p>   I am a student at SMU, Halifax persuing my course in Master in Computing & Data Analytics</p>
                    <br />
                    <p>
                        I have experience of 8 years in doing Automations for Finance department.
                    </p>
                </Col>
            </Row>
        </div>
    );
  }

export default Aboutme;