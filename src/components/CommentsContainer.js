import React from 'react';

const commentsData=[
    {
        name:"Vaishnavi Velagapudi",
        text:"This video is so Beautiful",
        reply:[
        ]
    },
    {
        name:"Vaishnavi Velagapudi",
        text:"This video is so Beautiful",
        reply:[
            {
                name:"Vaishnavi Velagapudi",
                text:"This video is so Beautiful",
                reply:[
                    {
                        name:"Vaishnavi Velagapudi",
                        text:"This video is so Beautiful",
                        reply:[
                            {
                                name:"Vaishnavi Velagapudi",
                                text:"This video is so Beautiful",
                                reply:[
                                    {
                                        name:"Vaishnavi Velagapudi",
                                        text:"This video is so Beautiful",
                                        reply:[
                                            {
                                                name:"Vaishnavi Velagapudi",
                                                text:"This video is so Beautiful",
                                                reply:[
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name:"Vaishnavi Velagapudi",
                        text:"This video is so Beautiful",
                        reply:[
                            {
                                name:"Vaishnavi Velagapudi",
                                text:"This video is so Beautiful",
                                reply:[
                                ]
                            },
                            {
                                name:"Vaishnavi Velagapudi",
                                text:"This video is so Beautiful",
                                reply:[
                                ]
                            },
                            {
                                name:"Vaishnavi Velagapudi",
                                text:"This video is so Beautiful",
                                reply:[
                                    {
                                        name:"Vaishnavi Velagapudi",
                                        text:"This video is so Beautiful",
                                        reply:[
                                        ]
                                    },
                                    {
                                        name:"Vaishnavi Velagapudi",
                                        text:"This video is so Beautiful",
                                        reply:[
                                        ]
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        name:"Vaishnavi Velagapudi",
                        text:"This video is so Beautiful",
                        reply:[
                        ]
                    }
                ]
            },
            {
                name:"Vaishnavi Velagapudi",
                text:"This video is so Beautiful",
                reply:[
                ]
            },
            {
                name:"Vaishnavi Velagapudi",
                text:"This video is so Beautiful",
                reply:[
                ]
            },
            {
                name:"Vaishnavi Velagapudi",
                text:"This video is so Beautiful",
                reply:[
                ]
            }
        ]
    },
    {
        name:"Vaishnavi Velagapudi",
        text:"This video is so Beautiful",
        reply:[
            {
                name:"Vaishnavi Velagapudi",
                text:"This video is so Beautiful",
                reply:[
                ]
            },
            {
                name:"Vaishnavi Velagapudi",
                text:"This video is so Beautiful",
                reply:[
                ]
            },
            {
                name:"Vaishnavi Velagapudi",
                text:"This video is so Beautiful",
                reply:[
                    {
                        name:"Vaishnavi Velagapudi",
                        text:"This video is so Beautiful",
                        reply:[
                        ]
                    },
                    {
                        name:"Vaishnavi Velagapudi",
                        text:"This video is so Beautiful",
                        reply:[
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"Vaishnavi Velagapudi",
        text:"This video is so Beautiful",
        reply:[
        ]
    },
    {
        name:"Vaishnavi Velagapudi",
        text:"This video is so Beautiful",
        reply:[
        ]
    }
];
const Comment=({data})=>{
    const {name,text,reply}=data;
    return(
        <div className='flex p-2 shadow-sm bg-gray-100 rounded-lg my-2'>
            <img className='w-14 h-14 p-3'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJryFTSQUV8Zuu_EGw2iUCpMbIIKWHBl2eQ&s"
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

const CommentsList=({comments})=>{
    return comments.map((comment,index)=>
        (
            <div>
                <Comment key={index} data={comment}/>
                <div className='border border-l-black pl-5 ml-5'>
                <CommentsList comments={comment.reply}/>
                </div>
            </div>
        ));
};
const CommentsContainer = () => {

  return (
    <div className='p-2 m-5'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer