import { Col, Row, List } from 'antd';
import { LeftOutlined, FormOutlined, DashboardOutlined } from '@ant-design/icons';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { Icon, IconRow, IconButton, RecipeTitle, RecipeImage, H3Title, Description  } from '../components/StyledComponents';
import { Checkbox } from 'antd';
import { useParams } from 'react-router';


interface RouteParams {
    id: string
  }

const RecipeDetailPage: React.FC = () => {
    const params = useParams<RouteParams>();
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];

    return (
        <>
           <Row align="middle" justify="space-between" style={{padding:"20px"}}>
               <Col>
                   <IconButton href="/"><LeftOutlined /></IconButton>
               </Col>
               <Col><IconButton href={`/edit/${params.id}`}><FormOutlined /></IconButton></Col>
           </Row>
           <div style={{padding: "0 20px 20px 20px"}}>
            <RecipeTitle>
                    Title
                </RecipeTitle>
            <Row gutter={16}> 
                <Col md={12} xs={24} style={{paddingBottom:"20px"}}>
                        {/* image */}
                        <RecipeImage
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        {/* time + servings + temperature */}
                        <IconRow> 
                            <Icon> <BiTimeFive/> 30min </Icon>
                            <Icon> <DashboardOutlined/> 180 C </Icon>
                            <Icon> <AiOutlinePieChart/> 1 serving </Icon>
                        </IconRow>
                    </Col>
                    <Col md={12} xs={24}>
                        {/* list of ingredients */}
                    <H3Title >Ingredients</H3Title>
                        <List
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Checkbox> {item} </Checkbox>
                                </List.Item>
                            )}
                        />
                        {/* desription */}
                </Col>
                </Row>
                <H3Title>Description</H3Title>
                <Description>
                    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team.
                </Description>
            </div>
        </>
    );
}

export default RecipeDetailPage;