import React from 'react';
import '../stylesheets/testimonals.css'; // Import CSS file

function Testimonals() {
  // Array of testimonials
  const testimonials = [
    {
      id: 1,
      img: '/daniel.jpg',
      name: 'Daniel Clifford',
      role: 'Verified Graduate',
      description: '"Connected me with fellow photographers, fostering growth and collaboration. It\'s more than a platform; it\'s a supportive creative community."',
      signature: '- Daniel Clifford'
    },
    {
      id: 2,
      img: '/jonathan.jpg',
      name: 'Jonathan Walters',
      role: 'Verified Graduate',
      description: '"Became my go-to for sharing travel experiences and meeting fellow adventurers."',
      signature: '- Jonathan Walters'
    },
    {
      id: 3,
      img: 'kira.jpg',
      name: 'Kira Whittle',
      role: 'Verified Graduate',
      description: '"I stumbled upon this Profile Panorama while searching for a platform to share my travel experiences. Little did I know, I\'d find a community that shares my wanderlust and thirst for adventure. From swapping travel tips to planning meetups, Profile Panorama has become my go-to destination for all things travel-related."',
      signature: '- Kira Whittle'
    },
    {
      id: 4,
      img: 'jeanette.jpg',
      name: 'Jeanette Harmon',
      role: 'Verified Graduate ',
      description: '"Opened doors to gigs, mentors, and lifelong friendships. It\'s an ecosystem where dreams thrive."',
      signature: '- Jeanette Harmon'
    },
    {
      id: 5,
      img: 'patrick.jpg',
      name: 'Patrick Abrams',
      role: 'Verified Graduate',
      description: '"Helped me craft a compelling profile and connect with other professionals. It\'s where I learn, grow, and network. It\'s a passport to new friendships and unforgettable journeys."',
      signature: '- Patrick Abrams'
    }
  ];

  return (
    <>
      {/* Title */}
      <h1 className='testimonal__title text-center text-4xl font-extrabold capitalize mb-4'>clients testimonials</h1>
      {/* Testimonials */}
      <div className='testimonal m-4'>
        {/* Mapping through testimonials */}
        {testimonials.map((item) => {
          return (
            <div class={`testimonal__grid grid-${item.id}`} key={item.id}>
              {/* Author information */}
              <div class="testimonal__author flex items-center">
                <img src={item.img} alt='client' className='rounded-full' />
                <div className='ml-6 mb-4'>
                  <h2 className='text-base font-bold'>{item.name}</h2>
                  <p>{item.role}</p>
                </div>
              </div>
              {/* Description */}
              <div class="testimonal__description">
                <p className='indent-14'>{item.description}</p>
              </div>
              {/* Signature */}
              <p className='mt-4 testimonal__signature font-extrabold flex justify-end'>{item.signature}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Testimonals;
