import useGemini from "./api/gemini";

export default function Friendly(props) {
  return useGemini(
    props,
    "Make the following text seem more friendly. ONLY return the modified text and nothing else.",
    true
  );
}
