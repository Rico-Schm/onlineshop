import React from 'react';
import Blogimg1 from '../assets/blog1.jpg';
import Blogimg2 from '../assets/blog2.jpg';
import Blogimg3 from '../assets/blog3.jpg';

function Blog() {
  return (
    <section id='blog'>
        <h4>Aus unserem Blog</h4>
        <section id='blog-wrap'>
        <section className='blog-box'>
            <section className='blogimages-box'>
                <img className='blogimages' src={Blogimg1} alt="Blog eins" />
            </section>
            <article>
                <h5>Behind the scenes</h5>
                <strong>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis, facillis.
                </strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Aspernatur fugiat incidunt, quidem ad maiores hic porro minus
                    repellat nostrum accusantium.
                </p>
            </article>
        </section>
        <section className='blog-box'>
            <section className='blogimages-box'>
                <img className='blogimages' src={Blogimg2} alt="Blog zwei" />
            </section>
            <article>
                <h5>Wohnideen</h5>
                <strong>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis, facillis.
                </strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Aspernatur fugiat incidunt, quidem ad maiores hic porro minus
                    repellat nostrum accusantium.
                </p>
            </article>
        </section>
        <section className='blog-box'>
            <section className='blogimages-box'>
                <img className='blogimages' src={Blogimg3} alt="Blog drei" />
            </section>
            <article>
                <h5>Homestorys</h5>
                <strong>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis, facillis.
                </strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Aspernatur fugiat incidunt, quidem ad maiores hic porro minus
                    repellat nostrum accusantium.
                </p>
            </article>
        </section>
        </section>
    </section>
  );
}

export default Blog;