import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Nav from '../../components/Dashboard/Nav';
import { Card,  Button } from 'react-bootstrap';
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { Breadcrumbs } from "@material-tailwind/react";



function Package() {
   
      
    const cardData = [
        {
            package: "SILVER",
          
            price: "$500",
            features: ["5 Pages Design","10 Email IDs", "Hosting (1 Year Free)", "Domain (1 Year Free)"],
        },
        {
            package: "GOLD",
          
            price: "$1000",
            features: ["8 - 10 Pages Design","10 Email IDs", "Hosting (1 Year Free)", "Domain (1 Year Free)"],
        },
        {
            package: "PREMIUM",
           
            price: "$1500",
            features: ["Shopping Cart, Payment Gateway ","10 Email IDs", "Hosting (1 Year Free)", "Domain (1 Year Free)"],
        },
    ];


    const [toggle, setToggle] = useState(true);
    const [activeCategory, setActiveCategory] = useState('websiteDesign');
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [showFooter, setShowFooter] = useState(false);
    const AccordionItem = ({ header, ...rest }) => (
        <Item
          {...rest}
          header={({ state: { isEnter } }) => (
            <div className="flex justify-between items-center ">
              
              <FontAwesomeIcon
                icon={isEnter ? faMinusSquare : faPlusSquare}
                className={`ml-auto me-6 transition-transform duration-200 ease-out ${
                  isEnter && "rotate-180"
                }`}
              />
              <span>{header}</span>
            </div>
          )}
          className="border-b"
          buttonProps={{
            className: ({ isEnter }) =>
              `flex w-full p-4 text-left  ${
                isEnter && ""
              }`
          }}
          contentProps={{
            className: "transition-height duration-200 ease-out"
          }}
          panelProps={{ className: "p-4" }}
        />
      );
      
    const handleClick = (category) => {
        setActiveCategory(category);
    };

    const toggleAccordion = (eventKey) => {
        setActiveAccordion(activeAccordion === eventKey ? null : eventKey);
    };

    const Toggle = () => {
        setToggle(!toggle);
    };

  


    return (
        <div className="flex">
          <div className={`col-4 col-md-2 position-fixed bg-[#184CA2] ${toggle ? 'w-64' : 'w-12'}`}>
  <Sidebar toggle={toggle} setToggle={setToggle} />
</div>
            <div className="flex-1 p-5 bg-gray-200 h-full relative">
                <Nav Toggle={Toggle} />
                <div className='py-4'>
      <Breadcrumbs fullWidth>
      
      <a href="/user/dashboard" className='font-bold' >
       Dashboard
      </a>
      <a href="#" className=" font-semibold">Package</a>
    </Breadcrumbs>
    </div>
                <div className="bg-light gap-4 my-4 mb-9 flex-1 h-full">
                    <div className="flex mb-8 ">
                        <div className="w-1/3 mr-2 bg-white p-4 rounded h-96">
                            <h2 className="text-lg font-semibold">Categories</h2>
                            <div className="flex flex-col p-4">
                                <a
                                    className={`flex justify-between items-center text-lg btn btn-light p-2 ${activeCategory === 'websiteDesign' ? 'text-[#000000] bg-[#DFE5FF] rounded' : 'text-[#000000]'}`}
                                    href="#"
                                    onClick={() => handleClick('websiteDesign')}
                                >
                                    <span className="category-text">Website Design</span>
                                    {activeCategory === 'websiteDesign' &&
                                        <span className="arrow-icon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    }
                                </a>



                                <a
                                    className={`flex justify-between items-center text-lg btn btn-light p-2 ${activeCategory === 'laravelApp' ? 'text-[#000000] bg-[#DFE5FF] rounded' : 'text-[#000000]'}`}
                                    href="#"
                                    onClick={() => handleClick('laravelApp')}
                                >
                                    <span className="category-text">Laravel App</span>
                                    <span className="arrow-icon  ">
                                        {activeCategory === 'laravelApp' && <FontAwesomeIcon icon={faArrowRight} />}
                                    </span>
                                </a>

                                <a
                                    className={`flex justify-between items-center text-lg btn btn-light p-2 ${activeCategory === 'angularDashbaord' ? 'text-[#000000] bg-[#DFE5FF] rounded' : 'text-[#000000]'}`}
                                    href="#"
                                    onClick={() => handleClick('angularDashbaord')}
                                >
                                    <span className="category-text">Angular Dashbaord</span>
                                    <span className="arrow-icon  ">
                                        {activeCategory === 'angularDashbaord' && <FontAwesomeIcon icon={faArrowRight} />}
                                    </span>
                                </a>

                                <a
                                    className={`flex justify-between items-center text-lg btn btn-light p-2 ${activeCategory === 'reactAdmin' ? 'text-[#000000] bg-[#DFE5FF] rounded' : 'text-[#000000]'}`}
                                    href="#"
                                    onClick={() => handleClick('reactAdmin')}
                                >
                                    <span className="category-text">React Admin</span>
                                    <span className="arrow-icon  ">
                                        {activeCategory === 'reactAdmin' && <FontAwesomeIcon icon={faArrowRight} />}
                                    </span>
                                </a>

                                <a
                                    className={`flex justify-between items-center text-lg btn btn-light p-2 ${activeCategory === 'wordpressDesign' ? 'text-[#000000] bg-[#DFE5FF] rounded' : 'text-[#000000]'}`}
                                    href="#"
                                    onClick={() => handleClick('wordpressDesign')}
                                >
                                    <span className="category-text">Wordpress Design</span>
                                    <span className="arrow-icon  ">
                                        {activeCategory === 'wordpressDesign' && <FontAwesomeIcon icon={faArrowRight} />}
                                    </span>
                                </a>

                                <a
                                    className={`flex justify-between items-center text-lg btn btn-light p-2 ${activeCategory === 'elementorDesign' ? 'text-[#000000] bg-[#DFE5FF] rounded' : 'text-[#000000]'}`}
                                    href="#"
                                    onClick={() => handleClick('elementorDesign')}
                                >
                                    <span className="category-text">Elementor Design</span>
                                    <span className="arrow-icon  ">
                                        {activeCategory === 'elementorDesign' && <FontAwesomeIcon icon={faArrowRight} className='' />}
                                    </span>
                                </a>


                            </div>
                        </div>
                        <div className='w-2/3 bg-white p-3 rounded'>
                            {activeCategory === 'websiteDesign' && (
                                <div>
                                    {/* Content for Website Design category */}
                                </div>
                            )}
                            {activeCategory === 'websiteDesign' && (
                                <div className="rounded bg-white p-3">
                                    <div>
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={200}>
        <AccordionItem header="E-commerce" initialEntered>
        <div className="grid md:grid-cols-3 gap-4 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl bg-[#D8E7FF] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
             <h2 className="text-xs font-bold text-center text-[#184CA2]">
              {card.package}
            </h2>
            {/* <h2 className="text-xs font-bold text-center py-8">
              {card.title}
            </h2> */}
            <p className="text-center text-2xl font-bold">{card.price}</p>
            
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b border-[#ccc] mx-2 text-xs ${index === 0 ? "mt-4" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`bg-[#184CA2] text-white hover:text-[#184CA2] hover:bg-white duration-150  rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
        </AccordionItem>

        <AccordionItem header="Business/Corporate">
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
        </AccordionItem>

        <AccordionItem header="Educational/Institutional">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
        <AccordionItem header="Portfolio/Resume">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
        <AccordionItem header="Entertainment">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
        <AccordionItem header="Forums/Community Boards">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </Accordion>
    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bottom-0 left-0  right-0 bg-white text-[#B6B6B6] text-center text-xs absolute p-2">
                &copy; {new Date().getFullYear()} Bamfer Consulting llc. All Right Reserved.
            </div>
            </div>
            
        </div>

    );
}

export default Package;

{/* 
      <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={card.image}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`bg-[#00df9a] hover:text-[#00df9a] hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
      */}

