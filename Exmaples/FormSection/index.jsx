"use client";
import { Box } from "@mui/system";
import React from "react";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { TextField, Container, Button } from "@mui/material";
import Link from "next/link";
const FormSection = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Box
          maxWidth="sm"
          style={{
            background:
              "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            // webkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            fontWeight: "700",
            fontSize: "4rem",
          }}
          className={styles.text_background}
        >
          {type} Post
        </Box>
        <Typography variant="body1" sx={{ color: "info.main" }}>
          {type} and share amazing prompts with the world, and let your
          imagination run wild with any platform......
        </Typography>
        <Box maxWidth="md" sx={{ color: "info.main" }}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                mt: 5,
                display: "flex",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Typography variant="body1" color="info">
                Your discussion msg
              </Typography>
              <TextField
                elevation={5}
                variant="standard" // <== changed this
                margin="normal"
                required
                fullWidth
                multiline
                rows={5}
                type={"text"}
                id="outlined-size-small"
                size="small"
                autoFocus={false}
                value={post.prompt}
                onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                placeholder="Your Posts........."
                sx={{
                  width: "100%",
                  color: "primary.text",
                  border: 1,
                  borderColor: "primary.main",
                  p: 1.5,
                  borderRadius: 2,
                }}
                InputProps={{
                  disableUnderline: true, // <== added this
                }}
              />
            </Box>
            <Box
              sx={{
                mt: 1,
                display: "flex",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Typography variant="body1" color="info">
                Field of Prompt{" "}
                <Typography variant="body1" color="info" component={"span"}>
                  {" "}
                  (#product, #development, #idea, #react, #node, #javaScript
                  etc.)
                </Typography>
              </Typography>
              <TextField
                elevation={5}
                variant="standard" // <== changed this
                margin="normal"
                required
                fullWidth
                type={"text"}
                id="outlined-size-small"
                size="small"
                autoFocus={false}
                value={post.tag}
                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                placeholder="#Tag"
                sx={{
                  width: "100%",
                  color: "primary.text",
                  border: 1,
                  borderColor: "primary.main",
                  p: 1.5,
                  borderRadius: 2,
                }}
                InputProps={{
                  disableUnderline: true, // <== added this
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                alignItems: "center",
                gap: 3,
                my: 5,
              }}
            >
              <Button
                variant="text"
                color="info"
                component={Link}
                href={"/"}
                sx={{ fontWeigth: 600 }}
              >
                Cancel
              </Button>
              <Button
                variant="text"
                color="primary"
                type="submit"
                disabled={submitting}
                sx={{ fontWeigth: 600 }}
              >
                {" "}
                {submitting ? `${type}ing...` : type}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default FormSection;

// const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
//   return (
//
//       <form
//         onSubmit={handleSubmit}
//         className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
//       >
//         <label>
//           <span className='font-satoshi font-semibold text-base text-gray-700'>
//             Your AI Prompt
//           </span>

//           <textarea
//             value={post.prompt}
//             onChange={(e) => setPost({ ...post, prompt: e.target.value })}
//             placeholder='Write your post here'
//             required
//             className='form_textarea '
//           />
//         </label>

//         <label>
//           <span className='font-satoshi font-semibold text-base text-gray-700'>
//             Field of Prompt{" "}
//             <span className='font-normal'>
//               (#product, #webdevelopment, #idea, etc.)
//             </span>
//           </span>
//           <input
//             value={post.tag}
//             onChange={(e) => setPost({ ...post, tag: e.target.value })}
//             type='text'
//             placeholder='#Tag'
//             required
//             className='form_input'
//           />
//         </label>

//         <div className='flex-end mx-3 mb-5 gap-4'>
//           <Link href='/' className='text-gray-500 text-sm'>
//             Cancel
//           </Link>

//           <button
//             type='submit'
//             disabled={submitting}
//             className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
//           >
//             {submitting ? `${type}ing...` : type}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };
