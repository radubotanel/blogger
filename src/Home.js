import logo from './munte.jpg';
// import "./Main.css"
// import './App.css';
import './Home.css'

function Home() {
    let url = "/Home";
  return (
    <div className="homePozition">
        <div className="container">

            <div className="row">

                <div className="col-md-8">

                    <h1 className="my-4">Page Heading
                    </h1>

                    <div className="card mb-4">
                        <img className="card-img-top" src={logo} alt="munte" />
                        <div className="card-body">
                            <h2 className="card-title">Post Title</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a href={url} className="btn btn-primary">Read More &rarr;</a>
                            
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2020 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



  );
}

function Search() {

    return (

        <div className="searchPozition">
            {/* <div className="container">

                <div className="row"> */}
                    <div className="col-md-4">
                        <div className="card my-4">
                            <h5 className="card-header">Search</h5>
                            <div className="card-body">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <span className="input-group-append">
                                        <button className="btn btn-secondary" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>  
                {/* </div>
            </div> */}
        </div>
    );
}

function Categories() {
    return (

        <div className="categoriesPozition">
            {/* <div className="container">

                <div className="row">     */}
                <div className="col-md-4">
                    <div className="card my-4">
                        <h5 className="card-header">Categories</h5>
                        <div className="card-body">
                            <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#">Aventura</a>
                                </li>
                                <li>
                                    <a href="#">Stiinta</a>
                                </li>
                                <li>
                                    <a href="#">Politica</a>
                                </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#">Psihologie</a>
                                </li>
                                <li>
                                    <a href="#">Filozofie</a>
                                </li>
                                <li>
                                    <a href="#">Religie</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                {/* </div>
            </div> */}
        </div>
    );
}

function Widget() {
    return (

        <div className="widgetPozition">
            <div className="col-md-4">
                <div class="card my-4">
                    <h5 class="card-header">Side Widget</h5>
                <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.
                </div>
            </div>

      </div>

    </div>
    );
}

function NavBar() {
    let url1 = "/";
    let url2 = "/AddPost";
    let url3 = "/Login"
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">Blog</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href={url1}>Home
                  {/* <span class="sr-only">(current)</span> */}
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href={url2}>Creeaza</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={url3}>Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}


function Comment() {
    return (
            <div className="container">
                <div className="col-lg-8">
                    <div className="media mb-4">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                            <div className="media-body">
                                <h5 className="mt-0">Commenter Name</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            </div>
                        </div>
                    </div>
            </div>

    );
}

function LeaveComment() {
    return (
            <div className="container">
                <div className="col-lg-8">
                    <div class="card my-4">
                        <h5 class="card-header">Leave a Comment:</h5>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    );
}

function Post() {
    return (
    <div className="homePozition">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <h1 class="mt-4">Post Title</h1>
                    <hr/>
                    <p>Posted on January 1, 2019 at 12:00 PM</p> 
                    <hr/>
                    <img class="img-fluid rounded" src={logo} alt=""/>
                    <hr/>
                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                    <blockquote class="blockquote">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p> 
                </div>
            </div>
        </div>
        </div>
    );

}

function Btns() {
    return (
        <div className="butoane">

                <button type="button" className="btn btn-light">Like</button>


                <button type="button" className="btn btn-light">Dislike</button>


            <button type="button" className="btn btn-primary">Share</button>

        </div>
    );
}

function AddPost() {
    return (
        <div className="adaugaPostare" >
            <div className="container">
                <h1>Adauga o noua postare!</h1>
                <div className="col-lg-8">
                    <div class="card my-4">
                        <h5 class="card-header">Titlu:</h5>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control" rows="1"></textarea>
                                </div>
                                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                            </form>
                        </div>
                        <h5 class="card-header">Descriere:</h5>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                            </form>
                        </div>
                        <h5 class="card-header">Postare:</h5>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control" rows="10"></textarea>
                                </div>
                                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                            </form>
                        </div>
                        <h5 class="card-header">Adauga o imagine:</h5>
                        <button onClick={'e'}>
                            Upload a file
                        </button>
                        {/* <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            
        </div>
    );
}

export {Home};
export {Search};
export {Categories};
export {Widget};
export {NavBar};

export {Comment};
export {LeaveComment};
export {Post};
export {Btns};
export {AddPost};