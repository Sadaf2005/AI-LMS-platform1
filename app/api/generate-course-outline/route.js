import { courseOutlineAIModel } from "@/configs/AiModel";
import { NextResponse } from "next/server";
import { db } from "@/configs/db";

export async function POST(req) {
    console.log('Received request body:', await req.json());

    const {courseId,topic,courseType,difficultyLevel,createdBy}=await req.json();
    console.log(topic);
    //generate course layout using ai 
    const PROMPT='Generate a study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+'with the summary of course ,List of Chapters along with summary for each  chapter,topic list in each chapter in JSON format only '
    const aiResp=await courseOutlineAIModel.sendMessage(PROMPT)
    console.log(aiResp);
    const aiResult=JSON.parse(aiResp.response.text());
    console.log(aiResult);

    // save the result along with user input 
    // const dbResult=await db.insert(STUDY_MATERIAL_TABLE).values({
    //     courseId:courseId,
    //     courseType:courseType,
    //     createdBy:createdBy,
    //     topic:topic,
    //     courseLayout:aiResult
    // }).returning({STUDY_MATERIAL_TABLE})
    // console.log(dbResult);

    return NextResponse.json({result:dbResult[0]})
    
}

// export async function POST(req) {
//     try {
//       const { courseId, topic, courseType, difficultyLevel, createdBy } = await req.json();
      
//     //   generate course layout using ai 
//     const PROMPT='Generate a study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+'with the summary of course ,List of Chapters along with summary for each  chapter,topic list in each chapter in JSON format '
//     const aiResp=await courseOutlineAIModel.sendMessage(PROMPT)
//     const aiResult=JSON.parse(aiResp.response.text());

//     // save the result along with user input 
//     const dbResult=await db.insert(STUDY_MATERIAL_TABLE).values({
//         courseId:courseId,
//         courseType:courseType,
//         createdBy:createdBy,
//         topic:topic,
//         courseLayout:aiResult
//     }).returning({STUDY_MATERIAL_TABLE})
//     console.log(dbResult);
  
//       return NextResponse.json({ result: dbResult[0] })
//     } catch (error) {
//       console.error('Error in POST /api/generate-course-outline:', error);
//       return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
//     }
//   }
// export async function POST(req) {
//   try {
//     console.log('Received request body:', await req.json());
    
//     const { courseId, topic, courseType, difficultyLevel, createdBy } = await req.json();
    
//     console.log('Parsed request data:', { courseId, topic, courseType, difficultyLevel, createdBy });
    
//     // Log before AI call
//     console.log('Sending request to AI model');
//     const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
//     console.log('AI response received:', aiResp);
    
//     // Log before JSON parsing
//     console.log('Parsing AI response');
//     const aiResult = JSON.parse(aiResp.response.text());
//     console.log('Parsed AI result:', aiResult);
    
//     // Log before database operation
//     console.log('Inserting data into database');
//     const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
//       courseId, courseType, createdBy, topic, courseLayout: aiResult
//     }).returning({STUDY_MATERIAL_TABLE});
//     console.log('Database operation result:', dbResult);
    
//     return NextResponse.json({result: dbResult[0]});
//   } catch (error) {
//     console.error('Detailed error in POST /api/generate-course-outline:', error.response.data);
//     return NextResponse.json({ error: 'An error occurred while processing your request', details: error.message }, { status: 500 });
//   }
// }


