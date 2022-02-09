import React from 'react';
import {useStyles} from '../../pages/client_registration/newRegistration.page';
import TextInput from "../../components/textInput/textInput.component";
import CustomDateSelect from "../../components/customDateSelect/customDateSelect.component";
import CustomButton from "../../components/customButton/customButton.component";
import styled from 'styled-components';
import MultipleSelect from "../../components/multiselect/multiselect.component";
import avatar from '../../static/images/userAvatar.svg';
import ContestantsList from "../../components/contestantsList/contestantsList.component";

const AddContestants = () => {
    const classes = useStyles();
    return (
        <div className={classes.box2}>
            <h3 className={classes.title}>Add Contestants</h3>
            <p>Fill in the data for profile. It will take a few seconds</p>
            <div className={classes.margLeft}>
                <div style={{
                    fontSize: '18px',
                    marginLeft: '3px',
                }}>
                    <p className={classes.title2}>Contestant's data</p>
                    <p style={{fontSize:  '10px',}}>Please fill in details below correctly</p>
                </div>
                <div style={{
                    width: '380px',
                    display: 'flex',
                    // padding: '20px',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}>
                    <TextInput label='Contestant Name' type='text' width='260px' />
                   <Border>
                       <AvatarContainer>
                           <Avatar src={avatar} />
                           <AvatarSpan>attach an image</AvatarSpan>
                       </AvatarContainer>
                   </Border>
                </div>
                <TextInput label='Code Name' type='text' placeholder='OC' width='380px' />
                <div style={{width: '380px', display: 'flex', justifyContent: 'space-between',}}>
                    <CustomDateSelect name='Start Date' label='Start Date' maxWidth='80px' />
                    <CustomDateSelect name='End Date' label='End Date' maxWidth='80px' />
                </div>
                <div style={{width: '380px', display: 'flex', justifyContent: 'flex-end',}}>
                    <ButtonDiv>
                        <ButtonText>Add</ButtonText>
                    </ButtonDiv>
                </div>
                <div style={{width: '380px', display: 'flex', justifyContent: 'space-between',}}>
                    <ContestantsList />
                </div>
            </div>
            <div className={classes.noMarg}>
                <CustomButton className={classes.noMarg} name='Continue' handleButton='' width='160px'/>
            </div>
        </div>
    )
}

export default AddContestants;


const ButtonDiv = styled.div`
  width: 151px;
  height: 48px;
  background-color: #E2E4E5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 10px 0;
  transition: 0.3s ease-in;
  cursor: pointer;
  
  & :hover{
    width: 151px;
    height: 48px;
    cursor: pointer;
    background-color: #0C96DE;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 10px 0;
  }
`;

const ButtonText = styled.p`
  color: white;
  margin: 0 auto;
`;


const Border = styled.div`
  width: 99px;
  height: 104px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #E2E4E5;
  padding: 20px;
  margin-bottom: 18px;
  
  &:hover {
    cursor: pointer;
  }
`;

const AvatarContainer = styled.div`
  width: 63px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



  &:hover {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;

const AvatarSpan = styled.p`
  width: 48px;
  height: 25px;
  font-size: 11px;
  color: #B7B7B7;
  margin: 5px auto;
  text-align: center;
`;



