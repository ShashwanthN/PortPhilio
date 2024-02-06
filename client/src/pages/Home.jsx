import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { FriendsCard, ProfileCard, TopBar, Subtopbar, TextInputPost, Searchbar } from "../components";
import { suggest, requests } from '../assets/data';
import { useForm } from 'react-hook-form';
import { NoProfile } from '../assets';
import { Link } from 'react-router-dom';
import { MdAdd, MdDoNotDisturbAlt, MdOutlineDone } from 'react-icons/md';



function Home() {
  const { user } = useSelector((state) => state.user);
  const [friendRequest, setFriendRequest] = useState(requests);
  const [suggestedFriends, setSuggestedFriends] = useState(suggest);
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const [file, setFile] = useState(null);


  const handlePostSubmit = async (data) => {

  };

  return (
    <div className='bg-bg w-full overflow-scroll
    'style={{height:'100%'}}>

      <div className='home w-full px-0 2xl:px bg-bgColor h-[100vh] overflow-hidden'
      style={{widows:'100%'}}>
        <TopBar />
        <div className='w-full flex gap-2 lg:gap-4  pb-10 h-full'>
          {/*left*/}
          <div className='m-4 hidden w-1/4  lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto'>

            <FriendsCard friends={user?.friends} />

          </div>
          {/* center*/}

          <div className='h-full pt-4 overflow-y-auto flex-1'>
            <form>
              <Searchbar />

            </form>


            <div className='flex-1 h-full bg-primary px-4 flex gap-6 flex-col rounded-md border-secondary border-2 overflow-y-auto'>

            </div>
          </div>
          {/*right*/}
          <div className="hidden w-1/4 h-full lg:flex m-4 flex-col gap-8 overflow-y-auto ">
            <div className='w-full bg-primary shadow-sm rounded-lg px-6 py-5 border-2 border-secondary'>
              <div className='flex items-center justify-between text-xl text-ascent-1 pb-2 border-b border-ascent-1'>
                <span>Friend Request</span>
                <span>{friendRequest?.length}</span>
              </div>
              <div className='w-full flex flex-col gap-4  pt-4'>
                {friendRequest?.map(({ _id, requestFrom: from }) => (
                  <div
                    key={_id}
                    className='flex items-center justify-between'>
                    <Link
                      to={"/profile/" + from._id}
                      className="w-full flex gap-4 items-center cursor-pointer"
                    >
                      <img
                        src={from?.profileUrl ?? NoProfile}
                        alt={from?.firstName}
                        className='w-10 h-10 object-cover rounded-full'
                      />

                      <div className='flex-1'>
                        <p className='text-sm reg text-bg2'>
                          {from?.firstName}{from?.lastName}

                        </p>
                        <span className='text-xs lig text-ascent-2'>
                          {from?.profession ?? " "}
                        </span>

                      </div>
                    </Link>
                    <div className='flex gap-1'>
                      <button
                        className='bg-ascent-1 text-sm text-bg2 p-1 rounded-full'
                        onClick={() => { }}
                      >
                        <MdOutlineDone size={20} className='text-bg' />
                      </button>
                      <button
                        className='bg-secondary text-sm text-bg2 p-1 rounded'
                        onClick={() => { }}
                      >
                        <MdDoNotDisturbAlt size={20} className='text-ascent-1' />
                      </button>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>

            <div className='w-full bg-primary shadow-sm rounded-lg px-6 py-5 border-2 border-secondary'>
              <div className='flex items-center justify-between text-xl lig text-ascent-1 pb-2 border-b border-ascent-1'>
                <span>Friend Suggestion</span>

              </div>
              <div className='w-full flex flex-col gap-4 pt-4'>
                {suggestedFriends?.map((friend) => (
                  <div className="flex items-center justify-between"
                    key={friend._id}
                  >
                    <Link
                      to={"/profile/" + friend?._id}
                      key={friend?._id}
                      className='w-full flex gap-4 items-center cursor-pointer'

                    >
                      <img
                        src={friend?.profileUrl ?? NoProfile}
                        alt={friend?.firstName}
                        className='w-10 h-10 object-cover rounded-full'

                      />
                      <div className='flex-1'>
                        <p className='text-sm med text-bg2'>
                          {friend?.firstName} {friend?.lastName}
                        </p>
                        <span className='text-xs lig text-ascent-2'>
                          {friend?.profession ?? "No Profession"}
                        </span>
                      </div>

                    </Link>
                    <div className='flex gap-1'>
                      <button
                        className='bg-ascent-1 text-sm text-bg2 p-1 rounded-full'
                        onClick={() => { }}
                      >
                        <MdOutlineDone size={20} className='text-bg' />
                      </button>
                      <button
                        className='bg-secondary text-sm text-bg2 p-1 rounded'
                        onClick={() => { }}
                      >
                        <MdDoNotDisturbAlt size={20} className='text-ascent-1' />
                      </button>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;