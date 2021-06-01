import React from 'react';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import PlacementsHeader from './PlacementsHeader';
import { connect } from 'react-redux';


const Advice = (props) => {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header />
      <MatPaperButton />
      <PlacementsHeader />
      <div id="columns">
        {props.placement[0].advice && <figure><div>{props.placement[0].advice}</div><span>-{props.placement[0].name}</span></figure>}
        {props.placement[1].advice && <figure><div>{props.placement[1].advice}</div><span>-{props.placement[1].name}</span></figure>}
        {props.placement[2].advice && <figure><div>{props.placement[2].advice}</div><span>-{props.placement[2].name}</span></figure>}
        {props.placement[3].advice && <figure><div>{props.placement[3].advice}</div><span>-{props.placement[3].name}</span></figure>}
        {props.placement[14].advice && <figure><div>{props.placement[14].advice}</div><span>-{props.placement[14].name}</span></figure>}
        {props.placement[4].advice && <figure><div>{props.placement[4].advice}</div><span>-{props.placement[4].name}</span></figure>}
        {props.placement[5].advice && <figure><div>{props.placement[5].advice}</div><span>-{props.placement[5].name}</span></figure>}
        {props.placement[6].advice && <figure><div>{props.placement[6].advice}</div><span>-{props.placement[6].name}</span></figure>}
        {props.placement[7].advice && <figure><div>{props.placement[7].advice}</div><span>-{props.placement[7].name}</span></figure>}
        {props.placement[8].advice && <figure><div>{props.placement[8].advice}</div><span>-{props.placement[8].name}</span></figure>}
        {props.placement[9].advice && <figure><div>{props.placement[9].advice}</div><span>-{props.placement[9].name}</span></figure>}
        {props.placement[17].advice && <figure><div>{props.placement[17].advice}</div><span>-{props.placement[17].name}</span></figure>}
        {props.placement[10].advice && <figure><div>{props.placement[10].advice}</div><span>-{props.placement[10].name}</span></figure>}
        {props.placement[11].advice && <figure><div>{props.placement[11].advice}</div><span>-{props.placement[11].name}</span></figure>}
        {props.placement[12].advice && <figure><div>{props.placement[12].advice}</div><span>-{props.placement[12].name}</span></figure>}
        {props.placement[13].advice && <figure><div>{props.placement[13].advice}</div><span>-{props.placement[13].name}</span></figure>}
        {props.placement[15].advice && <figure><div>{props.placement[15].advice}</div><span>-{props.placement[15].name}</span></figure>}
        {props.placement[16].advice && <figure><div>{props.placement[16].advice}</div><span>-{props.placement[16].name}</span></figure>}
      </div>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements
  };
};

export default connect(mapStateToProps)(Advice);