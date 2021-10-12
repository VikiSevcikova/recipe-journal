import { Col, Row, Typography, Input } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;
const { TextArea } = Input;

export const IconButton = styled.a`
    text-decoration: none;
    color: #fff;
    float: right;
    font-size: 20px;
`;

export const Title = styled.h1`
    color: #fff;
    margin: 0;
`;


export const Card = styled(Col)`
    margin-bottom: 10px;
`;
export const CardImage = styled.img`
    border-radius: 15px 15px 0 0 ;
    height: 200px;
    width: 100%;
    object-fit: cover;
    background-color: gray;
`;
export const CardBody = styled.div`
    background-color: #ffffffb7;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
    background-color: rgba(255, 255, 255, 0.3);
    position: relative;
    border-radius: 0 0 15px 15px;
    padding: 10px 0;
`;

export const CardTitle = styled.h2`
    color: #fff;
`;

export const IconRow = styled(Row)`
    filter: blur(50%);
    justify-content: space-around;
    align-items: center;
`;

export const Icon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const RecipeTitle = styled(Title)`
    text-align: center;
`;

export const RecipeImage = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 10px;
`;

export const H3Title = styled.h2`
    color: #fff;
    margin-bottom: 0;
    padding: 20px 0;
`;

export const Description = styled(Paragraph)`
    color:#fff;
`;

export const InputLabel = styled.div`
    margin-right: 10px;
`;

export const StyledInput = styled.input`
    border: none;
    outline: none;
    border-bottom: 2px solid #EFEFEF;
    background-color: transparent;
    margin: 20px 0;
    width: 70%;
`;

export const DescriptionInput = styled(TextArea)`
    color:#fff;
    background-color: transparent;
    border: 2px solid #fff;
    &:focus{
        border-color: #fff;
        box-shadow: none;
    }
    &:hover{
        border-color: #fff;
    }
`;

export const Button = styled.button`
    background-color: #ffffff5a;
    border: 2px solid #fff;
    border-radius: 5px;
    margin: 20px 0;
    &:hover{
        background-color: #ffffff22;
    }
`;