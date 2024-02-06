import './Projectsearch.css'; 

const SearchProject = () => {
    return ( 
        <nav className="serach_navbar">
            <img src='./images/profile-2user.png' alt='profile-user' className='profile_user'></img>
            <span className="project_option">Projects</span>
            <div className="search-bar">
                <input type="text" placeholder="Search Project" className="search-int" />
            </div>
            <img src='./images/search-normal.png' alt='serach' className='search_img'></img>
            <button className="create-project-btn">Create Project</button>
        </nav>
     );
}
 
export default SearchProject;