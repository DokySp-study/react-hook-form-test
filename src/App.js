import './App.css';

import { useForm } from 'react-hook-form';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';



/**
## React Hook Form

 - References
    - https://react-hook-form.com/get-started
    - https://mjn5027.tistory.com/40

 - Form validation (Korean)
    - https://nyeongnyeong.tistory.com/299
 */
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main />}></Route>
          <Route path='/stest' element={<Stest title={"PL"} />}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}




function Stest(props) {

  // const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmitHadler = (data) => {
    console.log(data)

    // 여기에서 사용자에게 받은 정보 재확인 후 axios 통해 벡엔드 API 활용
  }



  // console.log(watch("keyword"));

  return (

    <div className='stest'>

      <h3>콘텐츠 등록</h3>
      <h1>{props.title}</h1>


      <form onSubmit={handleSubmit(onSubmitHadler)}>

        <table>

          <tr>
            <td>주제</td>
            <td>
              <select {...register("subject")}>
                <option value={"C"}>C</option>
                <option value={"Java"}>Java</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>키워드</td>
            <td>
              <input placeholder='복수의 키워드들은 ,로 구분하여 입력하세요.' {...register("keyword", { required: true })} />
              {errors.keyword && <span className='error'>내용을 입력해주세요</span>}
            </td>

          </tr>

          <tr>
            <td>작성자</td>
            <td>
              <input placeholder='작성자 입력은 선택사항입니다.' {...register("author")}></input>
            </td>
          </tr>

          <tr>
            <td>토픽</td>
            <td>
              <input placeholder='토픽을 입력하세요.' {...register("topic", { required: true })}></input>
              {errors.topic && <span className='error'>내용을 입력해주세요</span>}
            </td>
          </tr>

          <tr>
            <td>개념 및 문제</td>
            <td><input type='file' {...register("files")}></input></td>
          </tr>

          <tr>
            <td>난이도</td>
            <td>

              <input type="radio" id="high" name="level" value="high" {...register("level", { required: true })} />
              <label>상</label>
              <input type="radio" id="mid" name="level" value="mid" {...register("level", { required: true })} />
              <label>중</label>
              <input type="radio" id="low" name="level" value="low" {...register("level", { required: true })} />
              <label>하</label>
              {errors.level && <span className='error'>내용을 입력해주세요</span>}


            </td>
          </tr>


        </table>


        <br /><br />


        <button>메인</button>
        {/* <button onClick={navigate('/')}>메인</button> */}
        {/* 작동 안됨 */}
        <input type="submit"></input>

      </form>

    </div >

  )

}







function Main(props, { history }) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const navigate = useNavigate()


  console.log(watch("example"))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <br />

      <input defaultValue="test" {...register("example")}></input>

      <br /><br />

      <input {...register("exampleRequired", { required: true })}></input>


      {errors.exampleRequired ? <><br /><span className='noti'>This field is required</span></> : <br />}

      <br /><br />

      <input type="submit"></input>

      <br /><br />
      <button onClick={navigate('/stest')}>stest</button>

    </form>
  )

}

export default App;
