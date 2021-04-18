import classes from './Topbar.module.css';

const Topbar = (props) => {
     return (
        <header>
            <nav className={classes.Topbar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_rUnpfRUGarWy2oKcot0JIxW2twM3pIDXTvoIxKCQGaH35ztMPIQABvZkiH0P4h6zUE&usqp=CAU" alt="Amayon Logo" />
            </nav>
        </header>
     );
 }
 export default Topbar;