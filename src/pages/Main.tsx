import { Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IconButton, Title } from '../components/StyledComponents';
import RecipeCard from '../components/RecipeCard';

const Main: React.FC = () => {
    return (
        <>
           <Row align="middle" justify="space-between" style={{padding:"20px"}}>
               <Col>
               <Title>
                    Recipe Journal
               </Title>
               </Col>
               <Col>
               <IconButton><PlusOutlined/></IconButton>
               </Col>
           </Row>
           <Row gutter={16} align="middle" style={{padding:"20px", margin:"0"}}>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
           </Row>
        </>
    );
}

export default Main;