import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import styled from "styled-components";

function App() {
	type Todo = { id: string; title: string; contents: string; isDone: boolean };

	const [todos, setTodos] = useState<Todo[]>([
		{
			id: uuid(),
			title: "제목1",
			contents: "내용1",
			isDone: false,
		},
		{
			id: uuid(),
			title: "제목2",
			contents: "내용2",
			isDone: true,
		},
		{
			id: uuid(),
			title: "제목3",
			contents: "내용3",
			isDone: false,
		},
		{
			id: uuid(),
			title: "제목4",
			contents: "내용4",
			isDone: false,
		},
	]);

	return (
		<StFirstWrapper>
			<StInforWrapper>
				<div
					style={{
						width: "100%",
					}}
				>
					<StHeaderWrapper>오늘 목표를 기록해봐요!👍🏻</StHeaderWrapper>
					<StMainWrapper>
						<Input todos={todos} setTodos={setTodos} />
						<div>
							<h1>리스트 영역</h1>
							<TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
							<TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
						</div>
					</StMainWrapper>
					<StFooterWrapper>항상 행복한 하루 보내세요!</StFooterWrapper>
				</div>
			</StInforWrapper>
		</StFirstWrapper>
	);
}

export default App;

const StFirstWrapper = styled.div`
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

const StInforWrapper = styled.div`
	width: 1200px;
	min-width: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StHeaderWrapper = styled.header`
	font-size: 28px;
	font-weight: 700;
	padding: 30px;
	background-color: #9036ff;
	color: #fff;
	border-radius: 30px;
	box-shadow: 4px 4px 35px 10px rgba(0, 0, 0, 0.08);
`;

const StMainWrapper = styled.main`
	background-color: #fff;
	border-radius: 30px;
	box-shadow: 4px 4px 35px 10px rgba(0, 0, 0, 0.08);
	padding: 30px;
	margin-top: 30px;
	margin-bottom: 30px;
`;

const StFooterWrapper = styled.footer`
	font-size: 28px;
	font-weight: 700;
	padding: 30px;
	color: #9036ff;
	background-color: #fff;
	border-radius: 30px;
	box-shadow: 4px 4px 35px 10px rgba(0, 0, 0, 0.08);
	margin-bottom: 50px;
	text-align: center;
`;
