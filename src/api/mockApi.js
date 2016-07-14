const data = {
  questions: [
    'Little interest or pleasure in doing things?',
    'Feeling down, depressed, or hopeless?',
    'Trouble falling or staying asleep, or sleeping too much?',
    'Feeling tired or having little energy?',
    'Poor appetite or overeating?',
    'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
    'Trouble concentrating on things, such as reading the newspaper or watching television?',
    'Moving or speaking so slowly that other people could have noticed?',
    'Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
    'Thoughts that you would be better off dead, or of hurting yourself in some way?'
  ],
  selections: [ 'Not at all', 'Several days', 'More than half the days in the week', 'Nearly every day'],
  levels: [
    {
      level: 'None',
      min: 0,
      max: 4 
    },
    {
      level: 'Mild',
      min: 5,
      max: 9
    },
    {
      level: 'Moderate',
      min: 10,
      max: 14 
    },
    {
      level: 'Moderately Severe',
      min: 15,
      max: 19
    },
    {
      level: 'Severe',
      min: 20,
      max: 27 
    },
  ],
  doctors: [
    {
      id: 0,
      name: 'Dr. Michael Tanzer, MD',
      speciality: 'Psychiatrist',
      picUrl: 'https://d2t808ag5aqhkh.cloudfront.net/853f37da-0d94-48de-80df-bb1f510db5c0zoom.jpg',
      address: '65 Broadway, Suite 739, New York, NY, 10006',
      city: 'New York, NY',
      email: 'dr@example.com'
    },
    {
      id: 0,
      name: 'Dr. Edward Fruitman, MD',
      speciality: 'Psychiatrist',
      picUrl: 'https://dsw5h1xg5uvx.cloudfront.net/fba590f8-55f8-4fb2-ac99-bbf8051e0501zoom.jpg',
      address: '115 Broadway, Suite 1300, New York, NY, 10006',
      city: 'New York, NY',
      email: 'dr@example.com'
    },
    {
      id: 2,
      name: 'Dr. Aaron Savedoff, MD',
      speciality: 'Psychiatrist',
      picUrl: 'https://dsw5h1xg5uvx.cloudfront.net/625d201e-5223-4e9f-88ea-9bdac664ec3ezoom.jpg',
      address: '7 Dey Street, Suite 400 (4th Fl), New York, NY, 10007',
      city: 'New York, NY',
      email: 'dr@example.com'
    },
    {
      id: 3,
      name: 'Dr. Notin Town, MD',
      speciality: 'Psychiatrist',
      picUrl: 'https://d2t808ag5aqhkh.cloudfront.net/e90c0fd8-d2f3-4706-bc2f-78d212d9d59czoom.jpg',
      address: '111 Broadway, New York, NY 10006',
      city: 'Boston, MA',
      email: 'dr@example.com'
    },
    {
      id: 4,
      name: 'Dr. Nota Psych, DO',
      speciality: 'Primary Care Doctor',
      picUrl: 'https://d1cesmq0xhh7we.cloudfront.net/77a3297e-1fc5-47fd-b367-1ae3196661a4zoom.jpg',
      address: '120 Broadway, New York, NY 10006',
      city: 'New York, NY',
      email: 'dr@example.com'
    },
    {
      id: 5,
      name: 'Dr. Good ButTooMany, MD',
      speciality: 'Psychiatrist',
      picUrl: 'https://dsw5h1xg5uvx.cloudfront.net/fba590f8-55f8-4fb2-ac99-bbf8051e0501zoom.jpg',
      address: '115 Broadway, Suite 1300, New York, NY, 10006',
      city: 'New York, NY',
      email: 'dr@example.com'
    },
  ]
};

export default class mockApi {
  static getData() {
    return data;
  }
}

