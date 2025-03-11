import React, { useState } from "react";
import Sidebar from "../../../components/LeadsDashboard/Sidebar";
import Nav from "../../../components/Dashboard/Nav";
import Calendar from "react-calendar";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = React.useState("");
  const [toggle, setToggle] = useState(true);
  const totalTasks = 102; // Example total tasks
  const completedTasks = 44; // Example completed tasks

  const Toggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUpperCalendarChange = (date) => {
    setSelectedDate(date);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const pendingTasks = totalTasks - completedTasks;
  const progressBarValue =
    totalTasks !== 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="flex">
      {toggle && (
        <div className="col-4 col-md-2 position-fixed bg-[#184CA2]">
          <Sidebar />
        </div>
      )}
      <div className="flex-1 p-5 bg-gray-200 ">
        <Nav Toggle={Toggle} />
        {/* Your main content goes here */}
        <h2 class="font-bold">Leads Dashboard</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
          <div class="col-span-1 md:col-span-1">
            <div class="bg-white shadow-sm rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 class="text-lg font-semibold">102</h3>
                <p class="text-lg">total tasks</p>
              </div>
              <i class="bi bi-cart-plus text-3xl"></i>
            </div>
          </div>
          <div class="col-span-1 md:col-span-1">
            <div class="bg-white shadow-sm rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 class="text-lg font-semibold">102</h3>
                <p class="text-lg">total tasks</p>
              </div>
              <i class="bi bi-cart-plus text-3xl"></i>
            </div>
          </div>
          <div class="col-span-1 md:col-span-1">
            <div class="bg-white shadow-sm rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 class="text-lg font-semibold">102</h3>
                <p class="text-lg">total tasks</p>
              </div>
              <i class="bi bi-cart-plus text-3xl"></i>
            </div>
          </div>
          <div class="col-span-1 md:col-span-1">
            <div class="bg-white shadow-sm rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 class="text-lg font-semibold">102</h3>
                <p class="text-lg">total tasks</p>
              </div>
              <i class="bi bi-cart-plus text-3xl"></i>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-row gap-4">
            <div className="md:w-8/12 font-normal text-xs">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white shadow-sm p-4 font-normal text-sm">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg">Latest Activity</h2>
                    {/* <button onClick={toggleModal} className="border rounded px-4 py-2">Add a Schedule</button> */}
                    <button
                      onClick={toggleModal}
                      className="border border-[#184CA2]  rounded p-2 me-4 text-[#184CA2]"
                    >
                      Add a Schedule
                    </button>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="badge-container me-4">
                      <div className="badge-circle bg-secondary"></div>
                      <span className="badge ms-1">2 Meetings</span>
                    </div>
                    <div className="badge-container me-4">
                      <div className="badge-circle bg-primary"></div>
                      <span className="badge">2 Discussion</span>
                    </div>
                    <div className="badge-container me-4">
                      <div className="badge-circle bg-info"></div>
                      <span className="badge">1 Reviews</span>
                    </div>
                  </div>
                  <br />
                  <div class="space-y-4">
                    <div class="bg-[#F3F7F9] p-2 shadow border-l-4 border-[#184CA2]">
                      <div class="flex justify-between items-center p-2">
                        <div>
                          <div class="flex items-center">
                            <p class="text-xs font-medium m-0">
                              10:00 - 11:00 AM
                              <span class="ml-2 p-1 bg-[#184CA2] text-white rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-4 w-4 inline-block  text-[#FFFFFF]"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                                  />
                                </svg>
                              </span>
                            </p>
                          </div>
                          <p class="text-xs text-gray-600 m-0">
                            Bamfer Consulting llc Project Estimation Meeting
                          </p>
                          <p class="text-xxs text-gray-500 m-0">
                            Lead by{" "}
                            <span class="text-xs text-[#184CA2]">John Doe</span>
                          </p>
                        </div>
                        <button
                          id="viewAllButton"
                          class="border text-[#868686] bg-[#FFFFFF] rounded hover:bg-[#184CA2] hover:text-[#FFFFFF] p-2"
                          onclick="toggleRows()"
                        >
                          View All
                        </button>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div class="space-y-4">
                    <div class="bg-[#F3F7F9] p-2 shadow border-l-4 border-[#1FB1E6]">
                      <div class="flex justify-between items-center p-2">
                        <div>
                          <div class="flex items-center">
                            <p class="text-xs font-medium m-0">
                              10:00 - 11:00 AM
                              <span class="ml-2 p-1 bg-[#FFFFFF] text-white rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-4 w-4 inline-block text-[#1FB1E6]"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                                  />
                                </svg>
                              </span>
                            </p>
                          </div>
                          <p class="text-xs text-gray-600 m-0">
                            Bamfer Consulting llc Project Estimation Meeting
                          </p>
                          <p class="text-xxs text-gray-500 m-0">
                            Lead by{" "}
                            <span class="text-xs text-[#1FB1E6]">John Doe</span>
                          </p>
                        </div>
                        <button
                          id="viewAllButton"
                          class="border text-[#868686] bg-[#FFFFFF] rounded hover:bg-[#184CA2] hover:text-[#FFFFFF] p-2"
                          onclick="toggleRows()"
                        >
                          View All
                        </button>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div class="space-y-4">
                    <div class="bg-[#F3F7F9] p-2 shadow border-l-4 border-[#06B48A]">
                      <div class="flex justify-between items-center p-2">
                        <div>
                          <div class="flex items-center">
                            <p class="text-xs font-medium m-0">
                              10:00 - 11:00 AM
                              <span class="ml-2 p-1 bg-[#FFFFFF] text-white rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-4 w-4 inline-block text-[#06B48A]"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                                  />
                                </svg>
                              </span>
                            </p>
                          </div>
                          <p class="text-xs text-gray-600 m-0">
                            Bamfer Consulting llc Project Estimation Meeting
                          </p>
                          <p class="text-xxs text-gray-500 m-0">
                            Lead by{" "}
                            <span class="text-xs text-[#06B48A]">John Doe</span>
                          </p>
                        </div>
                        <button
                          id="viewAllButton"
                          class="border text-[#868686] bg-[#FFFFFF] rounded hover:bg-[#184CA2] hover:text-[#FFFFFF] p-2"
                          onclick="toggleRows()"
                        >
                          View All
                        </button>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div class="space-y-4">
                    <div class="bg-[#F3F7F9] p-2 shadow border-l-4 border-[#184CA2]">
                      <div class="flex justify-between items-center p-2">
                        <div>
                          <div class="flex items-center">
                            <p class="text-xs font-medium m-0">
                              10:00 - 11:00 AM
                              <span class="ml-2 p-1 bg-[#FFFFFF] text-white rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-4 w-4 inline-block text-[#184CA2] "
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                                  />
                                </svg>
                              </span>
                            </p>
                          </div>
                          <p class="text-xs text-gray-600 m-0">
                            Bamfer Consulting llc Project Estimation Meeting
                          </p>
                          <p class="text-xxs text-gray-500 m-0">
                            Lead by{" "}
                            <span class="text-xs text-[#184CA2]">John Doe</span>
                          </p>
                        </div>
                        <button
                          id="viewAllButton"
                          class="border text-[#868686] bg-[#FFFFFF] rounded hover:bg-[#184CA2] hover:text-[#FFFFFF] p-2"
                          onclick="toggleRows()"
                        >
                          View All
                        </button>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div class="space-y-4">
                    <div class="bg-[#F3F7F9] p-2 shadow border-l-4 border-[#06B48A]">
                      <div class="flex justify-between items-center p-2">
                        <div>
                          <div class="flex items-center">
                            <p class="text-xs font-medium m-0">
                              10:00 - 11:00 AM
                              <span class="ml-2 p-1 bg-[#FFFFFF] text-white rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-4 w-4 inline-block mr-1 text-[#06B48A]"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                                  />
                                </svg>
                              </span>
                            </p>
                          </div>
                          <p class="text-xs text-gray-600 m-0">
                            Bamfer Consulting llc Project Estimation Meeting
                          </p>
                          <p class="text-xxs text-gray-500 m-0">
                            Lead by{" "}
                            <span class="text-xs text-[#06B48A]">John Doe</span>
                          </p>
                        </div>
                        <button
                          id="viewAllButton"
                          class="border text-[#868686] bg-[#FFFFFF] rounded hover:bg-[#184CA2] hover:text-[#FFFFFF] p-2"
                          onclick="toggleRows()"
                        >
                          View All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-4/12 font-normal text-xs ml-4">
              <div className="bg-white p-2 mb-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm">Make An Appointment</h2>
                </div>
                <Calendar
                  className="rounded-md border mb-8"
                  mode="single"
                  onChange={handleUpperCalendarChange}
                  value={selectedDate}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal ${
            showModal ? "block" : "hidden"
          } fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
        >
          <div className="modal-dialog">
            <div className="modal-content bg-white rounded-md w-96 mx-auto mt-10 p-4">
              <div className="modal-header flex justify-between items-center">
                <h5 className="modal-title text-lg font-semibold">
                  Schedule Activity
                </h5>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="modal-body">{/* Form Inputs */}</div>
              <div className="modal-footer mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={toggleModal}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto gap-4 my-4">
          <div className="flex justify-between items-center p-4 bg-white">
            <h2 className="text-lg">Tasks</h2>
            <div className="d-flex">
              <button
                onClick={toggleModal}
                className="border border-[#184CA2]  rounded p-2 me-4 text-[#184CA2]"
              >
                {" "}
                + Add Appointments
              </button>
              <button
                id="viewAllButton"
                className=" border border-[#184CA2] text-[#FFFFFF] bg-[#184CA2]   rounded hover:bg-[#FFFFFF] hover:text-[#184CA2] p-2"
                onclick="toggleRows()"
              >
                See All
              </button>
            </div>
          </div>
          <table class="min-w-full bg-white ">
            <thead class="bg-[#F3F7F9] ">
              <tr>
                <th class="pl-6 w-8">
                  <input id="checkbox" type="checkbox" class="hidden peer" />
                  {/* <label for="checkbox"
            class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
              <path
                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                data-name="7-Check" data-original="#000000" />
            </svg>
          </label> */}
                  <label>#</label>
                </th>
                <th class="px-6 py-3 text-left text-sm font-semibold ">Name</th>
                <th class="px-6 py-3 text-left text-sm font-semibold ">
                  Assign To
                </th>
                <th class="px-6 py-3 text-left text-sm font-semibold ">Date</th>
                <th class="px-6 py-3 text-left text-sm font-semibold ">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-sm font-semibold ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="whitespace-nowrap">
              <tr class="even:bg-blue-50">
                <td class="pl-6 w-8">
                  <input id="checkbox1" type="checkbox" class="hidden peer" />
                  <label
                    for="checkbox1"
                    class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full fill-white"
                      viewBox="0 0 520 520"
                    >
                      <path
                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                        data-name="7-Check"
                        data-original="#000000"
                      />
                    </svg>
                  </label>
                </td>
                <td class="px-6 py-4 text-sm">John Doe</td>
                <td class="px-6 py-4 text-sm">Renee A. Rivas</td>
                <td class="px-6 py-4 text-sm">20/12/2023</td>
                <td class="px-6 py-4 text-sm">
                  <button
                    type="button"
                    class="focus:outline-none text-[#18AA00] bg-[#EBF9EB] hover:bg-[#18AA00] hover:text-[#EBF9EB] focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-200"
                  >
                    Completed
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button class="mr-4" title="Edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </button>
                  <button title="View">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr class="even:bg-blue-50">
                <td class="pl-6 w-8">
                  <input id="checkbox2" type="checkbox" class="hidden peer" />
                  <label
                    for="checkbox2"
                    class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full fill-white"
                      viewBox="0 0 520 520"
                    >
                      <path
                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                        data-name="7-Check"
                        data-original="#000000"
                      />
                    </svg>
                  </label>
                </td>
                <td class="px-6 py-4 text-sm">Jane Smith</td>
                <td class="px-6 py-4 text-sm">Renee A. Rivas</td>
                <td class="px-6 py-4 text-sm">20/12/2023</td>
                <td class="px-6 py-4 text-sm">
                  <button
                    type="button"
                    class="focus:outline-none text-[#E51916] bg-[#F6E6E6] hover:bg-[#E51916] hover:text-[#F6E6E6] focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2 me-2 dark:bg-[#E51916] dark:hover:bg-[#E51916] dark:focus:ring-[#E51916]"
                  >
                    Cancel
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button class="mr-4" title="Edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </button>
                  <button title="View">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr class="even:bg-blue-50">
                <td class="pl-6 w-8">
                  <input id="checkbox3" type="checkbox" class="hidden peer" />
                  <label
                    for="checkbox3"
                    class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full fill-white"
                      viewBox="0 0 520 520"
                    >
                      <path
                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                        data-name="7-Check"
                        data-original="#000000"
                      />
                    </svg>
                  </label>
                </td>
                <td class="px-6 py-4 text-sm">Alen Doe</td>

                <td class="px-6 py-4 text-sm">Renee A. Rivas</td>
                <td class="px-6 py-4 text-sm">20/12/2023</td>
                <td class="px-6 py-4 text-sm">
                  <button
                    type="button"
                    class="focus:outline-none text-[#18AA00] bg-[#EBF9EB] hover:bg-[#18AA00] hover:text-[#EBF9EB] focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-200"
                  >
                    Completed
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button class="mr-4" title="Edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </button>
                  <button title="View">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr class="even:bg-blue-50">
                <td class="pl-6 w-8">
                  <input id="checkbox4" type="checkbox" class="hidden peer" />
                  <label
                    for="checkbox4"
                    class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full fill-white"
                      viewBox="0 0 520 520"
                    >
                      <path
                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                        data-name="7-Check"
                        data-original="#000000"
                      />
                    </svg>
                  </label>
                </td>
                <td class="px-6 py-4 text-sm">Kelwin mark</td>

                <td class="px-6 py-4 text-sm">Renee A. Rivas</td>
                <td class="px-6 py-4 text-sm">20/12/2023</td>
                <td class="px-6 py-4 text-sm">
                  <button
                    type="button"
                    class="focus:outline-none text-[#18AA00] bg-[#EBF9EB] hover:bg-[#18AA00] hover:text-[#EBF9EB] focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-200"
                  >
                    Completed
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button class="mr-4" title="Edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </button>
                  <button title="View">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr class="even:bg-blue-50">
                <td class="pl-6 w-8">
                  <input id="checkbox5" type="checkbox" class="hidden peer" />
                  <label
                    for="checkbox5"
                    class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full fill-white"
                      viewBox="0 0 520 520"
                    >
                      <path
                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                        data-name="7-Check"
                        data-original="#000000"
                      />
                    </svg>
                  </label>
                </td>
                <td class="px-6 py-4 text-sm">Dustin</td>
                <td class="px-6 py-4 text-sm">Renee A. Rivas</td>
                <td class="px-6 py-4 text-sm">20/12/2023</td>
                <td class="px-6 py-4 text-sm">
                  <button
                    type="button"
                    class="focus:outline-none text-[#E58116] bg-[#FDF3E8] hover:bg-[#E58116] hover:text-[#FDF3E8] focus:ring-4 focus:ring-[#E58116] font-medium rounded-lg text-sm px-2 py-2 me-2 dark:bg-[#E58116] dark:hover:bg-[#E58116] dark:focus:ring-[#E58116]"
                  >
                    Pending
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button class="mr-4" title="Edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </button>
                  <button title="View">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr class="even:bg-blue-50">
                <td class="pl-6 w-8">
                  <input id="checkbox6" type="checkbox" class="hidden peer" />
                  <label
                    for="checkbox6"
                    class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full fill-white"
                      viewBox="0 0 520 520"
                    >
                      <path
                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                        data-name="7-Check"
                        data-original="#000000"
                      />
                    </svg>
                  </label>
                </td>
                <td class="px-6 py-4 text-sm">Jams david</td>
                <td class="px-6 py-4 text-sm">John Doe</td>

                <td class="px-6 py-4 text-sm">20/12/2023</td>
                <td class="px-6 py-4 text-sm">
                  <button
                    type="button"
                    class="focus:outline-none text-[#E51916] bg-[#F6E6E6] hover:bg-[#E51916] hover:text-[#F6E6E6] focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2 me-2 dark:bg-[#E51916] dark:hover:bg-[#E51916] dark:focus:ring-[#E51916]"
                  >
                    Cancel
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button class="mr-4" title="Edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </button>
                  <button title="View">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 fill-[#184CA2] hover:fill-[#184CA2]"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BILLS */}
        <div class="flex flex-col md:flex-row gap-4">
          <div class="md:w-1/2 font-normal text-xs">
            <div class="flex justify-between items-center p-2 bg-white">
              <h2 class="text-lg">Bills</h2>
              <button
                id="viewAllButton"
                class="text-xs border border-blue-500 text-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white"
                onclick="toggleRows()"
              >
                View All
              </button>
            </div>
            <table class="min-w-full bg-white ">
              <thead class="bg-[#F3F7F9]">
                <tr>
                  <th class="pl-4 w-6">
                    <label>ID</label>
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-semibold">
                    Recipient Name
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-semibold">
                    Date
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-semibold">
                    Amount
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="even:bg-blue-50">
                  <td class="pl-4 w-6">A10</td>
                  <td class="px-6 py-4 text-xs">John Doe</td>
                  <td class="px-6 py-4 text-xs">02/12/2023</td>
                  <td class="px-6 py-4 text-xs">$10,000</td>
                  <td class="px-6 py-3">
                    <button
                      type="button"
                      class="focus:outline-none text-[#18AA00] bg-[#EBF9EB] hover:bg-[#18AA00] hover:text-[#EBF9EB] focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-200"
                    >
                      Success
                    </button>
                  </td>
                </tr>
                <tr class="even:bg-blue-50">
                  <td class="pl-4 w-6">A10</td>
                  <td class="px-6 py-4 text-xs">John Doe</td>
                  <td class="px-6 py-4 text-xs">02/12/2023</td>
                  <td class="px-6 py-4 text-xs">$10,000</td>
                  <td class="px-6 py-3">
                    <button
                      type="button"
                      class="focus:outline-none text-[#8D8B25] bg-[#FFFDE0] hover:bg-[#8D8B25] hover:text-[#FFFDE0] focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2 me-2  dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-200"
                    >
                      Success
                    </button>
                  </td>
                </tr>
                <tr class="even:bg-blue-50">
                  <td class="pl-4 w-6">A10</td>
                  <td class="px-6 py-4 text-xs">John Doe</td>
                  <td class="px-6 py-4 text-xs">02/12/2023</td>
                  <td class="px-6 py-4 text-xs">$10,000</td>
                  <td class="px-6 py-3">
                    <button
                      type="button"
                      class="focus:outline-none text-[#18AA00] bg-[#EBF9EB] hover:bg-[#18AA00] hover:text-[#EBF9EB] focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2 me-2  dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-200"
                    >
                      Success
                    </button>
                  </td>
                </tr>
                <tr class="even:bg-blue-50">
                  <td class="pl-4 w-6">A10</td>
                  <td class="px-6 py-4 text-xs">John Doe</td>
                  <td class="px-6 py-4 text-xs">02/12/2023</td>
                  <td class="px-6 py-4 text-xs">$10,000</td>
                  <td class="px-6 py-3">
                    <button
                      type="button"
                      class="focus:outline-none text-[#18AA00] bg-[#EBF9EB] hover:bg-[#18AA00] hover:text-[#EBF9EB] focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-200 dark:focus:ring-green-200"
                    >
                      Success
                    </button>
                  </td>
                </tr>
                <tr class="even:bg-blue-50">
                  <td class="pl-4 w-6">A10</td>
                  <td class="px-6 py-4 text-xs">Aaron S. McPherson</td>
                  <td class="px-6 py-4 text-xs">02/12/2023</td>
                  <td class="px-6 py-4 text-xs">$10,000</td>
                  <td class="px-6 py-2">
                    <button
                      type="button"
                      class="focus:outline-none text-[#8D8B25] bg-[#FFFDE0] hover:bg-[#8D8B25] hover:text-[#FFFDE0] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 me-2 dark:focus:ring-yellow-900"
                    >
                      Delay
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="md:w-1/2 font-normal text-xs">
            <div class="flex justify-between items-center p-2 bg-white">
              <h2 class="text-lg">History</h2>
              <button
                id="viewAllButton"
                class="text-xs border border-blue-500 text-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white"
                onclick="toggleRows()"
              >
                View All
              </button>
            </div>
            {/* <table class="min-w-full bg-white">
    <thead class="bg-gray-500 whitespace-nowrap">
        <tr>
            <th>
                <label>Email</label>
            </th>
            <th >
            Last Login
            </th>
            <th >
            IP Address
            </th>
            <th class="px-6 py-3 text-left text-xs font-semibold">
            Browser
            </th>
            <th class="px-6 py-3 text-left text-xs font-semibold">
            Successful
            </th>
        </tr>
    </thead>
    <tbody class="whitespace-nowrap">
        <tr class="even:bg-blue-50">
            <td class="pl-2 w-4 text-xs">
            bamfer@gmail.com
            </td>
            <td class="px-6 py-4 text-xs">
            29/12/2023 11:53 AM
            </td>
            <td class="px-6 py-4 text-xs">
            194.44.234.160
            </td>
            <td class="px-6 py-4 text-xs">
                $10,000
            </td>
            <td class="px-6 py-4">
                <span class="inline-block h-6 w-6 rounded-full overflow-hidden bg-success">
                    <svg class="h-full w-full text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 8.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 0 1.414 0l9-9a1 1 0 1 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/>
                    </svg>
                </span>
            </td>
        </tr>
        <tr class="even:bg-blue-50">
            <td class="pl-4 w-6">
            bamfer@gmail.com
            </td>
            <td class="px-6 py-4 text-xs">
            29/12/2023 11:53 AM
            </td>
            <td class="px-6 py-4 text-xs">
            194.44.234.160
            </td>
            <td class="px-6 py-4 text-xs">
                $10,000
            </td>
            <td class="px-6 py-4">
                <span class="inline-block h-6 w-6 rounded-full overflow-hidden bg-success">
                    <svg class="h-full w-full text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 8.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 0 1.414 0l9-9a1 1 0 1 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/>
                    </svg>
                </span>
            </td>
        </tr>
        <tr class="even:bg-blue-50">
            <td class="pl-4 w-6">
            bamfer@gmail.com
            </td>
            <td class="px-6 py-4 text-xs">
            29/12/2023 11:53 AM
            </td>
            <td class="px-6 py-4 text-xs">
            194.44.234.160
            </td>
            <td class="px-6 py-4 text-xs">
                $10,000
            </td>
            <td class="px-6 py-4">
                <span class="inline-block h-6 w-6 rounded-full overflow-hidden bg-success">
                    <svg class="h-full w-full text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 8.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 0 1.414 0l9-9a1 1 0 1 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/>
                    </svg>
                </span>
            </td>
        </tr>
        <tr class="even:bg-blue-50">
            <td class="pl-4 w-6">
            bamfer@gmail.com
            </td>
            <td class="px-6 py-4 text-xs">
            29/12/2023 11:53 AM
            </td>
            <td class="px-6 py-4 text-xs">
            194.44.234.160
            </td>
            <td class="px-6 py-4 text-xs">
                $10,000
            </td>
            <td class="px-6 py-4">
                <span class="inline-block h-6 w-6 rounded-full overflow-hidden bg-success">
                    <svg class="h-full w-full text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 8.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 0 1.414 0l9-9a1 1 0 1 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/>
                    </svg>
                </span>
            </td>
        </tr>
        
    </tbody>
</table> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
