import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

function AboutPage() {
  return (
    <>
      <Navbar />
      <h1 className='mt-5 flex items-center justify-center text-blue-700' style={{ fontSize: '25px', fontFamily: 'Oxygen', fontWeight: 'bolder' }}>About Dailycious Restaurants</h1>
      <div className="flex mt-16" style={{ fontFamily: 'Oxygen' }}>
        <section style={{ flex: '1', marginRight: '20px' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita ipsa similique sunt quibusdam atque et ipsum consequuntur! Quod dolore atque sequi, error culpa ipsa similique doloribus! Nulla quam assumenda alias! Ad..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eligendi ut, a odio beatae voluptatibus expedita aliquam, excepturi asperiores delectus quo id error autem corporis nemo rerum, porro doloribus nobis quisquam at illum!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam enim, impedit, fuga dolorum excepturi vitae quod eos corporis repudiandae maiores rem. Cumque mollitia ut, eius dicta consequatur modi non a temporibus adipisci esse numquam quos, autem accusantium at dignissimos rem veniam sunt illum nesciunt aperiam quas quod sit laboriosam? Esse dolorem provident repellat repellendus. Ea dolore, vitae laborum odio repellat commodi, minima totam porro tempora consequuntur quisquam, nulla vel architecto blanditiis alias. Ullam optio excepturi officia, ex numquam exercitationem quam veritatis! Architecto expedita, praesentium vero quod laborum neque facere asperiores quo ex enim consectetur veniam obcaecati ea, voluptatem veritatis dolore assumenda hic sapiente vitae soluta magni? Eveniet natus laudantium molestiae repudiandae dicta repellendus quibusdam deleniti atque alias explicabo saepe, corporis, veritatis minus obcaecati at perspiciatis repellat illo omnis dolorum voluptates fuga assumenda. Eos doloribus itaque quod repellendus tempore!
        </section>
        <section style={{ flex: '1' }}>
          <img src='/restaurant.jpg' alt='restaurant' style={{ width: '100%', height: 'auto' }} />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;

