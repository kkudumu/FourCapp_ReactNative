import React from 'react';
import { ScrollView, View, Text, ImageBackground, Image, Dimensions } from 'react-native';
import { Body, CheckBox, Radio, Right, ListItem, Separator, Container, Header, Content, Form, Item, Label, Input, Button } from 'native-base';
import firebase from 'firebase';

class SubsidyForm extends React.Component {
    render(){
        return(
            <Container>
            <Header>
                <Text style={{marginTop: 20, fontFamily: 'Avenir-Medium', fontSize: 18}}>4C CEL Application</Text>
            </Header>
                <ScrollView>
                    <Form>
                        <Separator>
                            <Text style={{fontFamily: 'Avenir-Medium', fontSize: 18}}>Primary Parent</Text>
                        </Separator>
                        <Item floatingLabel>
                        <Label>Primary Parent First Name</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel last>
                        <Label>Primary Parent Last Name</Label>
                        <Input />
                        </Item>
                        
                        <ListItem itemDivider style={{marginTop:20,}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Relationship to Child</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Parent</Text>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Grandparent</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Foster Parent</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Legal Guardian</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>

                        <ListItem itemDivider style={{marginTop:20,}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Primary Parent Address</Text>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>Current Address</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Apt/Unit No.</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>County</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>City</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>State</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Zip Code</Label>
                        <Input />
                        </Item>

                        <ListItem itemDivider style={{marginTop:20,}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Contact Information</Text>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>Cell Phone</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Work Phone</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Email</Label>
                        <Input />
                        </Item>

                        <ListItem itemDivider style={{marginTop:20,}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Other Information</Text>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>Language</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Ethnicity</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Family Size(include parents & children)</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Date of Birth</Label>
                        <Input />
                        </Item>
                        
                        <Separator>
                            <Text style={{fontFamily: 'Avenir-Medium', fontSize: 18}}>Secondary Parent</Text>
                        </Separator>
                        <Item floatingLabel>
                        <Label>Secondary Parent First Name</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Secondary Parent Last Name</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Email</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Date of Birth</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Cell Phone</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Work Phone</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Language</Label>
                        <Input />
                        </Item>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Living in the home?</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Yes</Text>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>No</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>

                        <Separator>
                            <Text style={{fontFamily: 'Avenir-Medium', fontSize: 18}}>Family Information</Text>
                        </Separator>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Characteristics(check all that apply)</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Child Protective Services</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Teen Parent</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Seasonal Migrant Worker</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Not Applicable</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>Other</Label>
                        <Input />
                        </Item>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Marital Status</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Single</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Married</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Separated</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Divorced</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Widowed</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Housing(check all that apply)</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Currently homeless</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Living in a Shelter</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>None</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Are you a Community College or University student?</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Yes</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>No</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>If yes, name of school</Label>
                        <Input />
                        </Item>

                        <Separator>
                            <Text style={{fontFamily: 'Avenir-Medium', fontSize: 18}}>Reason For Care</Text>
                        </Separator>
                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Primary Parent</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Working</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Attending School/Training</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Looking for Work</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Mentally Incapacitated</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Part-Time PreSchool (3 hours)</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>If working, work zip code</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>If attending school, school zip code</Label>
                        <Input />
                        </Item>
                        
                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Secondary Parent</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Working</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Attending School/Training</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Looking for Work</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Mentally Incapacitated</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text>Part-Time PreSchool (3 hours)</Text>
                            <Body>
                                <CheckBox checked={false} />
                            </Body>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>If working, work zip code</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>If attending school, school zip code</Label>
                        <Input />
                        </Item>
                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Is the Secondary Parent living in the home?</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Yes</Text>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>No</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>

                        <Separator>
                            <Text style={{fontFamily: 'Avenir-Medium', fontSize: 18}}>Monthly Income: Primary Parent</Text>
                        </Separator>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Total Monthly Wage</Text>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>$</Label>
                        <Input />
                        </Item>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Paid</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Monthly</Text>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Bi-weekly</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Weekly</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>

                        <Separator>
                            <Text style={{fontFamily: 'Avenir-Medium', fontSize: 18}}>Hours & Wage</Text>
                        </Separator>

                        <Item floatingLabel>
                        <Label>Hours per week</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>$ per hour</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Child Support</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Spousal Support</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Cash Aid or Foster Payment</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>State Disability Insurance (SDI)</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Supplemental Security Income (SSI)</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Other Income (Type)</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Amount</Label>
                        <Input />
                        </Item>

                        <Separator>
                            <Text style={{fontFamily: 'Avenir-Medium', fontSize: 18}}>Monthly Income: Secondary Parent</Text>
                        </Separator>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Living in the home?</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Yes</Text>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>No</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Total Monthly Wage</Text>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>$</Label>
                        <Input />
                        </Item>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Paid</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Monthly</Text>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Bi-weekly</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Weekly</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>

                        <Separator>
                            <Text style={{fontFamily: 'Avenir-Medium', fontSize: 18}}>Hours & Wage</Text>
                        </Separator>

                        <Item floatingLabel>
                        <Label>Hours per week</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>$ per hour</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Child Support</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Spousal Support</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Cash Aid or Foster Payment</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>State Disability Insurance (SDI)</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Supplemental Security Income (SSI)</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Other Income (Type)</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel>
                        <Label>Amount</Label>
                        <Input />
                        </Item>

                        <Separator>
                            <Text style={{fontFamily: 'Avenir-Medium', fontSize: 18}}>Eligibility Assessment</Text>
                        </Separator>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Are you currently receiving child care/preschool assistance for your child(ren)?</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Yes</Text>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>No</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <Item floatingLabel>
                        <Label>If yes, name of program</Label>
                        <Input />
                        </Item>

                        <ListItem itemDivider style={{marginTop:20}}>
                            <Text style={{fontFamily: 'Avenir-Heavy', fontSize: 15}}>Have you received Cash Aid (Welfare/TANF/AFDC) within the last 2 years?</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Yes</Text>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>No</Text>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>



                    </Form>
                    <Button
                        primary
                        block
                        >
                        <Text style={{color:'white'}}>Submit Application</Text>
                    </Button>
                </ScrollView>
          </Container>
        );
    }
}

export default SubsidyForm;