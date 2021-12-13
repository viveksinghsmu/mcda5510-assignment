import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";

function Myhometown() {
    const [temp, setTemp] = useState('-')
    const [city, setCity] = useState('1261481')
    const [isCelcius, setCelcius] = useState(true)

    const cities = {
        1277333: 'Bangalore',
        1261481: 'New Delhi'
    }

    var imgSrc = temp==="-" ? "assets/notavailable.png" : 
                temp<=10 ? "assets/cold.png" :
                    temp<=20 ? "assets/mild.png" :
                        "assets/sunny.png"

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=b6c9ae49e10ac23b0e829fc044894642&units=Metric`)
          .then(res => res.json())
          .then(
            (result) => {
                if(result.cod===200){
                    setTemp(Math.round(result.main.temp))
                }
                else 
                {
                    setTemp('-')
                }
            },
            (error) => {
              console.log('Falied to fetch Weather Data')
              setTemp('-')
            }
          )
    })

    
    
    return (
        <div className='Font-Style'>
              <Row>
                <Col sm={6}>
                    <br />
                    <Image src="https://www.planetware.com/photos-large/IND/india-delhi-red-fort.jpg" fluid rounded />
                </Col>
            </Row>
            <Row>
                <Col sm={6} style={{textAlign:'center'}}>
                    <br />
                    <h1 >I live in New Delhi, India</h1>
                    <br />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={1}>
                    <Image alt="Weather Unavailable" src={imgSrc} fluid/>
                </Col>
                <Col xs={6} md={1} style={{textAlign: 'center', verticalAlign: 'middle', fontSize: temp==='-'? '1vw' : '1vw', color:'#3465eb'}}>
                    {isCelcius ? temp==='-'? 'Not Available' : temp : temp==='-'? 'Not Available' : (((temp*9)/5) + 32) }
                </Col>
                <Col xs={6} md={1} style={{textAlign: 'center', fontSize: '1.5vw', verticalAlign: 'middle'}}>
                   
                    
                    <Row style={{color: isCelcius?'#3465eb':'', cursor: 'pointer'}} 
                        onClick={() => setCelcius(true)}>
                        <span>&#176;C</span>
                    </Row>
                    <Row style={{color: !isCelcius?'#3465eb':'', cursor: 'pointer'}} 
                    onClick={() => setCelcius(false)}>
                        <span>&#176;F</span>
                    </Row>
                </Col>
                <Col md={1} style={{textAlign: 'center', fontSize: '2vw', verticalAlign: 'middle'}}>
                    { temp==='-'?undefined:
                        <Form.Label for="city">City</Form.Label>
                    }
                </Col>
                <Col md={2}>
                    { temp==='-'?undefined:
                        <Form.Control
                            id="city"
                            as="select"
                            custom
                            onChange={(val) => setCity(val.target.value)}
                            value={city}
                            >
                            {Object.entries(cities)
                            .map( ([key, value]) => <option value={key} >{value}</option> )}
                        </Form.Control>
                    }
                </Col>
            </Row>
        </div>
    );
  }

export default Myhometown;