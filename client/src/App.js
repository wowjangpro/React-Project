import './App.css';
import Customer from './components/Customer';


const customers = [
    {
      'id' : 1,
      'image' : 'https://placeimg.com/320/320/any',
      'name' : '홀깅동',
      'birthday' : '2345345',
      'gender' : '남자',
      'job' : '학생'
    },
    {
      'id' : 2,
      'image' : 'https://placeimg.com/320/320/any',
      'name' : '홀깅여',
      'birthday' : '555555',
      'gender' : '여자',
      'job' : '학생'
    },
    {
      'id' : 3,
      'image' : 'https://placeimg.com/320/320/any',
      'name' : '홀깅삼',
      'birthday' : '111111',
      'gender' : '여자',
      'job' : '학생'
    }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
