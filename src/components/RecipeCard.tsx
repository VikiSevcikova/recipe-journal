import { Row } from 'antd';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImage, CardTitle, Icon, IconRow } from './StyledComponents';
import { DashboardOutlined } from '@ant-design/icons';


const RecipeCard: React.FC = () => {
    return (
        <Card md={6} sm={12} xs={24}>
            <Link to="recipe/1">
                <CardImage src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"></CardImage>
                <CardBody>
                <Row justify="center">
                    <CardTitle>Title</CardTitle>
                </Row>
                <IconRow> 
                    <Icon> <BiTimeFive/> 30 min </Icon>
                    <Icon> <DashboardOutlined/> 180 C </Icon>
                    <Icon> <AiOutlinePieChart/> 1 serving </Icon>
                </IconRow>
                </CardBody>
            </Link>
        </Card>
    );
}

export default RecipeCard;