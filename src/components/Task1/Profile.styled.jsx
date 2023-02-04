import styled from '@emotion/styled'

export const Card = styled.div`
margin: 0px auto;
	width: 300px;
	background-color: rgb(250, 250, 250);
	border-radius: 5px;
	box-shadow: rgb(0 0 0 / 41%) 2px 3px 14px 2px;
	overflow: hidden;
`;

export const Description = styled.div`
display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	padding: 50px 0px;
`;

export const Avatar = styled.img`
width: 160px;
	height: 160px;
	border-radius: 50%;
	background-color: gray;
`;

export const UserName = styled.p`
margin-top: 20px;
	font-size: 24px;
	font-weight: 700;
`;

export const Tag = styled.p`
margin-top: 8px;
	font-size: 20px;
	color: gray;
`;

export const Location = styled.p`
margin-top: 8px;
	font-size: 20px;
	color: gray;
`;

export const Stats = styled.ul`
display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	width: 100%;
	margin: 0px;
	padding: 0px;
`;

export const List = styled.li`
display: flex;
	-webkit-box-align: center;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 10px 0px;
	width: 100%;
	height: 70px;
	background-color: rgb(240, 240, 240);
	:not(:last-child) {
		border-right: 1px solid rgb(225, 225, 225);
	}
`;

export const Label = styled.span`
font-size: 16px;
	color: gray;
`;

export const Views = styled.span`
font-size: 20px;
	font-weight: 700;
`;