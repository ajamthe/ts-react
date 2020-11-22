import * as React from 'react';

interface IInputFileProps {
    onFileChange: (...args: any[]) => (any),
    onFileUpload: (...args: any[]) => (any),
}

const InputFile: React.FunctionComponent<IInputFileProps> = (props) => {
  return <div>
      <input type="file" onChange={props.onFileChange} /> 
                <button onClick={props.onFileUpload}> 
                  Upload! 
                </button> 
  </div>;
};

export default InputFile;
