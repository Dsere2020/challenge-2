import React, { useState } from 'react'
import styled from 'styled-components'
import star from './icon-star.png'
import phone from './illustration-thank-you.png'
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #131518 ;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BigSquare = styled.div`
    height: 416px;
    width: 412px;
    border-radius: 30px;
    background-color: #181E27;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    position: relative;
`
const StarContainer = styled.div`
    background-color: #262E38;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    position: absolute;
    left: 32px;
    top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Star = styled.div`
    height: 17px;
    width: 17px;
    background-image: url(${star});
    background-position: center;
    background-repeat: no-repeat;
`
const Topic = styled.h1`
    position: absolute;
    left: 32px;
    top: 110px ;
    color: white;

`
const Description = styled.p`
    position: absolute;
    top:180px;
    left:32px;
    right: 40px;
    text-align: left;
    font-size: 15px;
    color: white;

`
const Rating = styled.div`
    position: absolute;
    box-sizing: border-box;
    top: 256px;
    right: 40px;
    left: 32px;
    width: 85%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`

const Button = styled.button`
    height: 51px;
    width: 51px;
    background-color: ${props => props.isActive ? "orange" : "#262E38"};
    color: #7C8798;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 300ms ease;
    &:hover{
        background-color: #7C8798;
        color: white;
    }
`
const Submit = styled.button`
    position: absolute;
    bottom: 32px;
    height: 45px;
    width: 341px;
    cursor: pointer;
    background-color: #FC7614 ;
    border-radius: 22.5px;
    border: none;
    font-weight: 700;
    font-size: 15px;
    transition: all 300ms ease;
    &:hover{
        background-color: white;
        color: #FC7614;
    }
`
const PhonePic = styled.div`
    height:100px;
    width: 165px;
    background-image:  url(${phone});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 50px;
`
const ResultDiv= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    gap: 5px;
    padding: 0px 20px;
    background-color: #262E38;
    font-weight: 400;
    font-size: 15px;
    border-radius: 22.5px;
    margin-top: 32px;
    color: #FC7614;
    
`
const LeftP= styled.p``
const MidP= styled.p``
const RightP= styled.p``

const BigH = styled.h1`
    margin-top: 32px;
    font-size: 28px;
    font-weight: 700;
    color: white;
`
const Description2 = styled.p`
    width: 80%;
    text-align: center;
    color: #969FAD;
    font-size: 15px;
    font-weight: 400;
    margin-top: 10px;
`
const Main = () => {
    
    const [isActive,setIsActive]=useState(0);
    const buttonClick = (number) =>{
        if(isActive===number){
            setIsActive(0)
        }else setIsActive(number)
    }
    const[isSubmit, setIsSubmit]=useState(false);
    const submitClick =() =>{
        if(isActive>0){
            setIsSubmit(current=>!current)
        }else setIsSubmit("Please Choose The Number First")

    }
    
  return (
    <Container>
    {isSubmit?(<BigSquare>
        <StarContainer>
                <Star/>
            </StarContainer>

            <Topic>How did we do?</Topic>
            <Description>Please let us know how we did your support request. All feedback is appreciated to help us improve our offering!</Description>
            <Rating>

                <Button onClick={()=>{buttonClick(1)}} style={{backgroundColor: isActive===1 ? "orange" : "#262E38" }}>1</Button>
                <Button onClick={()=>{buttonClick(2)}} style={{backgroundColor: isActive===2 ? "orange" : "#262E38" }}>2</Button>
                <Button onClick={()=>{buttonClick(3)}} style={{backgroundColor: isActive===3 ? "orange" :"#262E38"  }}>3</Button>
                <Button onClick={()=>{buttonClick(4)}} style={{backgroundColor: isActive===4 ? "orange" : "#262E38" }}>4</Button>
                <Button onClick={()=>{buttonClick(5)}} style={{backgroundColor: isActive===5 ? "orange" :"#262E38"  }}>5</Button>
            </Rating>  
            <Submit onClick={submitClick}>SUBMIT</Submit>
            <div style={{color:"white"}} >{isSubmit}</div>

        </BigSquare>) 
        : 
        (<BigSquare>
            <button onClick={submitClick}>Test</button>   
            <PhonePic></PhonePic>
            <ResultDiv>
                <LeftP>You selected</LeftP>
                <MidP>{isActive}</MidP>
                <RightP>out of 5</RightP>
            </ResultDiv>

            <BigH>Thank you!</BigH>
            <Description2>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </Description2>
            </BigSquare>)}
    </Container>
 ) 
}

export default Main