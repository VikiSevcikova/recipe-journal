import { Row, Col } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { IconButton, IconRow, SearchBtn, Title } from '../components/StyledComponents';
import RecipeCard from '../components/RecipeCard';
import InputComponent from '../components/Input';
import { useState } from 'react';

const Main: React.FC = () => {
    const [inputTitle, setInputTitle] = useState<string>("");

    return (
        <div style={{padding:"20px"}}>
           <Row align="middle" justify="space-between">
               <Col>
               <Title>
                    Recipe Journal
               </Title>
               </Col>
               <Col>
               <IconButton><PlusOutlined/></IconButton>
               </Col>
           </Row>
           <Row>
           <form style={{width:"100%", position:"relative"}}>
               <InputComponent type="text" placeholder="Search recipe by title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
               <SearchBtn/>
            </form>
           </Row>
           <Row gutter={16} align="middle">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
           </Row>
        </div>
    );
}

export default Main;