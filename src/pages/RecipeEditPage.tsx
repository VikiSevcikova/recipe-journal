import { Row, Col, List } from 'antd';
import { LeftOutlined, DashboardOutlined, CheckOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { H3Title, IconButton, Button, DescriptionInput, InputLabel } from '../components/StyledComponents';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { Icon } from '../components/StyledComponents';
import { useParams } from 'react-router';
import { useState } from 'react';
import UploadImage from '../components/UploadImage';
import InputComponent  from '../components/Input';

interface RouteParams {
    id: string
}

const RecipeEditPage: React.FC = () => {
    const params = useParams<RouteParams>();

    const [title, setTitle] = useState<string>("");
    const [cookingTime, setCookingTime] = useState<string>("");
    const [temperature, setTemperature] = useState<string>("");
    const [servings, setServings] = useState<number>(1);

    const [ingredients, setIngredients] = useState<string[]>(['Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',]);
    const [newIngredient, setNewIngredient] = useState<string>("");
    const [description, setDescription] = useState<string>("Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.");

    const save = () => {
        //save changes
    }

    const addNewIngredient = () => {
        //add newIngredient
    }

    return (
        <>
           <Row align="middle" justify="space-between" style={{padding:"20px"}}>
               <Col>
                   <IconButton href="/"><LeftOutlined /></IconButton>
               </Col>
               <Col><IconButton href={`/recipe/${params.id}`} onClick={save}> <CheckOutlined /> </IconButton></Col>
           </Row>
           <div style={{padding: "0 20px 20px 20px"}}>
                    <Icon>
                        <InputLabel>Title: </InputLabel>
                        <InputComponent type="text" placeholder="Brownie" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                    </Icon>
                    <Row align="middle" gutter={16}>
                        <Col md={12} xs={24} >
                            {/* image */}
                            <UploadImage img="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>  
                        </Col>
                        {/* time + servings + temperature */}
                        <Col md={12} xs={24}>
                            <Icon> 
                                <InputLabel> <BiTimeFive/> Cooking Time: </InputLabel>
                                <InputComponent type="text" placeholder="30 min" value={cookingTime} onChange={(e)=> setCookingTime(e.target.value)}/> 
                            </Icon>
                            <Icon>
                                <InputLabel> <DashboardOutlined /> Temperature: </InputLabel>
                                <InputComponent type="text" placeholder="180 C" value={temperature} onChange={(e)=> setTemperature(e.target.value)}/>
                            </Icon>
                            <Icon>
                                <InputLabel> <AiOutlinePieChart/> Servings: </InputLabel>
                                <InputComponent type="number" placeholder="1" value={servings} onChange={(e)=> setServings(parseInt(e.target.value))}/>
                            </Icon>
                        </Col>
                    </Row>
                   
                    {/* list of ingredients */}
                   <H3Title>Ingredients</H3Title>
                    <List
                        dataSource={ingredients}
                        renderItem={ingredient => (
                            <List.Item>
                                <CloseCircleOutlined /> <span>{ingredient}</span>
                            </List.Item>
                        )}
                    />
                    <Col xs={24}>
                        <InputComponent type="text" placeholder="2 egg whites" value={newIngredient} onChange={(e)=>setNewIngredient(e.target.value)} />
                    </Col>
                    <Col xs={24}>
                        <Button onClick={addNewIngredient}>Add ingredient</Button>
                    </Col>
                   
            {/* description */}
               <H3Title>Description</H3Title>
               <DescriptionInput rows={4} placeholder="Here add the steps..." value={description} onChange={(e)=> setDescription(e.target.value)}/>
            </div>
        </>
    );
}

export default RecipeEditPage;