import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className='relative lg:w-1/2'>
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 absolute right-20 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
        </div>
        <div className='lg:w-1/2 space-y-3'>
          <h6 className='text-xl font-bold text-orange-400'>About Us</h6>
          <h1 className="text-5xl font-bold">We are experienced in the field</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-warning">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default About;