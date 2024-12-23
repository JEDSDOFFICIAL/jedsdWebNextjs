import React from "react";


function HomepageProject() {
  /*// State to keep track of whether 'Articles' or 'Journals' is selected
  const [selectedCategory, setSelectedCategory] = useState("Articles");

  // Sample data for articles and journals
  const articles = [
    {
      projectName: "Article 1",
      content:
        "This is article 1 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, harum. Nesciunt vitae quaerat error laborum consequuntur molestias sint tempore accusantium illum, exercitationem hic quidem magni voluptates, doloribus ipsam sit rem.",
    },
    {
      projectName: "Article 2",
      content:
        "Aperiam sint magni totam consectetur omnis suscipit in maiores impedit debitis asperiores accusantium error consequatur illum, ex quidem soluta. Distinctio ducimus iusto odit enim officiis, ut animi at asperiores doloribus?",
    },
    { projectName: "Article 3", content: "This is article 3" },
    { projectName: "Article 3", content: "This is article 3" },
  ];

  const journals = [
    {
      projectName: "Journal 1",
      content:
        "This is journal 1.Dolore laudantium debitis ipsam, sapiente quasi tempore iusto repellendus illo veniam reiciendis, blanditiis doloremque ea nostrum esse tempora? Mollitia quasi accusantium velit laboriosam dolorem ratione fuga sint eum. Ipsam, veniam.",
    },
    { projectName: "Journal 2", content: "This is journal 2" },
    { projectName: "Journal 3", content: "This is journal 3" },
    { projectName: "Journal 3", content: "This is journal 3" },
  ];

  // Function to handle category selection
  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };

  // Function to render items based on the selected category
  const renderItems = () => {
    const items = selectedCategory === "Articles" ? articles : journals;
    return (
      <div className="w-full h-fit flex flex-row  flex-wrap justify-between items-center px-5 gap-11">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-80 p-4 bg-gradient-to-t from-white border border-black to-cyan-400/50 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="w-[98%] aspect-video bg-red-300 border border-black rounded-lg "></div>
            <div className="p-4">
              <h2 className="text-xl  font-semibold">{item.projectName}</h2>
              <p className="text-gray-600 w-full text-ellipsis text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur sint quo nisi aspernatur distinctio beatae velit.
                Ipsum rerum at eos deleniti eum architecto est facere? Fugit
                assumenda culpa nisi debitis? Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam quis ante sit amet tellus
                ornare tincidunt.
              </p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full h-auto flex justify-center items-center">
          <Button
            variant={"outline"}
            size={"lg"}
            className="w-fit py-3 shadow-xl text-xl border border-black rounded-md"
          >
            Show more {selectedCategory}
          </Button>
        </div>
      </div>
    );
  };*/

  return (
    <div className="h-fit w-full flex flex-col items-start justify-center pt-11 gap-3">
      <p className="md:text-5xl text-3xl text-black font-bold underline text-center w-full">
        Recent Posts
      </p>
      {/* <div className="w-full h-12 flex flex-row items-center justify-center gap-5">
        <div
          onClick={() => handleCategorySelect("Articles")}
          className="text-black text-xl font-medium px-4 py-1 active:bg-blue-500 rounded-lg border-2 border-black hover:bg-gray-500 duration-300 transition-all hover:text-white cursor-pointer"
        >
          Articles
        </div>
        <div
          onClick={() => handleCategorySelect("Journals")}
          className="text-black text-xl font-medium px-4 py-1 active:bg-blue-500 rounded-lg border-2 border-black hover:bg-gray-500 duration-300 transition-all hover:text-white cursor-pointer"
        >
          Journals
        </div>
      </div> */}

      <div className="w-full h-[25rem] text-center text-black text-xl flex items-center justify-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        {" "}
        We are working on it...
      </div>
      {/* <div className=" top-0 left-0">{renderItems()}</div> */}
    </div>
  );
}

export default HomepageProject;
