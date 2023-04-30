interface Props{
    children: React.ReactNode;
    onClose: () => void;
}

function Alert({children, onClose} : Props){
        return(
            <div className="alert alert-success alert-dismissible" role="alert">
                {children}
                <button type="button" className="close" onClick={onClose} data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
        );
    }

export default Alert;