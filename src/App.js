import React, { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { h1, h2, span, wBtn } from './Config';

const Container = styled.div``;

const Header = styled.div`
  background: linear-gradient(to right, #4b6cb7, #182848);
  font-family: Roboto;
  align-items: center;
`;

const Top = styled.div`
  height: 50px;
  align-items: center;
  justify-content: space-between;
  display: flex;

  @media(min-width: 300px) and (max-width: 679px) {
    display: none;
  }
`;
const TopLeft = styled.div`
  margin-left: 50px;
`;
const TopTitle = styled.span`
  font-size: ${h2};
  color: #fff;
`;

const TopRight = styled.div`
  display: flex;
  margin-right: 100px;
`;

const EmailDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const TopText = styled.span`
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
  border-right: ${props => props.bRight || 'none'}
`;


const Bottom = styled.div`
  align-items: center;
  display: flex;

  @media(min-width: 300px) and (max-width: 679px) {
    flex-direction: column;
    padding: 25px 15px;
  }
  @media(min-width: 680px) {
    justify-content: space-between;
  }
  
`;


const Left = styled.div`
  @media(min-width: 300px) and (max-width: 679px) {
    width: 100%;
  }
  @media(min-width: 680px) {
    margin-left: 50px;
    width: 50%;
    margin-bottom: 80px;
  }
`;
const LeftTitle = styled.h1`
  color: #fff;
  font-size: ${h1};

  @media(min-width: 300px) and (max-width: 679px) {
    font-size: 35px;
    text-align: center;
  }
  @media(min-width: 680px) {
  }
`;
const LeftText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 22px;
  width: 100%;

  @media(min-width: 300px) and (max-width: 679px) {
    font-size: ${span};
    text-align: center;
  }
`;


const Form = styled.form`
  height: 400px;
  width: 80%;
  z-index: 0;
  background-color: #fff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media(min-width: 300px) and (max-width: 679px) {
    margin-top: 15px
  }
  
  @media(min-width: 680px) {
    width: 400px;
    margin-right: 50px;
  }

  @media(min-width: 1200px) {
    margin-top: 50px;
    margin-right: 100px;
  }
`;

const TitleForm = styled.span`
  text-align: center;
  font-size: 28px;
  height: 40px;
`;



const Content = styled.div`
  margin-top: 50px;

  @media(min-width: 1200px) {
    margin-top: 0;
  }

  @media(min-width: 1501px) {
    margin-top: -70px;
  }
`;

const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentTitle = styled.span`
  font-size: ${h1};

  @media(min-width: 300px) and (max-width: 679px) {
    font-size: ${h2};
  }
`;
const ContentSubtitle = styled.span`
  font-size: ${span};
  color: #aaa;
  text-align: center;
  margin-top: 10px;
  width: 80%;
`;

const ContentBottom = styled.div`
  display: flex;

  @media(min-width: 300px) and (max-width: 679px) {
    flex-direction: column;
    margin-top: 70px;
  }
  
  @media(min-width: 680px) {
    margin: 70px 50px 50px 50px;
    justify-content: space-between;
  }
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 300px) and (max-width: 679px) {
    margin-top: 30px;
  }

  @media(min-width: 680px) {
    width: 27%;
  }
`;
const ContentText = styled.span`
  font-size: ${h2};
`;
const ContentSubtext = styled.p`
  text-align: center;
  color: #aaa;
  font-size: ${span};
`;



function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (p) => {
    setPassword(p.target.value)
  }

  const handleSubmit = () => {
    console.log(email, password)
  }

  const EmailSvg = () => {
    return (
      <svg height="22px" width="22px" fill="rgba(255, 255, 255, 0.5)" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 512 512"  >
        <g>
          <g>
            <polygon points="43.52,76.8 256,225.28 468.48,76.8 		" />
          </g>
        </g>
        <g>
          <g>
            <path d="M268.8,276.48c-7.68,5.12-20.48,5.12-28.16,0L0,107.52V409.6c0,12.8,12.8,25.6,25.6,25.6h460.8
			c12.8,0,25.6-12.8,25.6-25.6V107.52L268.8,276.48z"/>
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </svg>
    );
  }

  const HandsSvg = () => {
    return (
      <svg width="100px" height="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 512.002 512.002">
        <path fill="#F29F5C" d="M418.258,249.103L405.252,143.45l-24.372,3l0.01-0.017l-47.25-26.591
	c-5.04-2.836-10.824-4.07-16.583-3.538l-74.606,6.9c-9.171,0.848-17.366,6.081-21.993,14.045l-52.584,90.508
	c-3.883,6.683-0.835,15.254,6.396,17.985l2.151,0.812c4.138,1.563,8.391,2.468,12.642,2.822l-6.663,5.803l-13.33,11.614
	l-37.913,32.34c-6.749,5.879-7.45,16.109-1.571,22.858l3.846,4.405c7.55,8.658,20.691,9.557,29.365,2.005l14.49,16.62
	c4.711,5.41,11.613,7.803,18.244,6.987c3.985-0.49,7.873-2.142,11.12-4.982l14.474,16.621c4.728,5.424,11.629,7.801,18.26,6.985
	c3.985-0.491,7.874-2.127,11.122-4.966l7.866,6.798c7.552,8.673,20.708,9.57,29.382,2.018l10.693-9.329l89.896-70.012l0.097-0.089
	l35.468-0.035L418.258,249.103z"/>
        <path fill="#D37D42" d="M379.731,267.833l-0.097,0.089l-89.896,70.012l-10.693,9.329c-8.673,7.552-21.83,6.655-29.382-2.018
	l-7.866-6.798c-3.248,2.839-7.138,4.476-11.122,4.966c-6.631,0.816-13.531-1.561-18.26-6.985l-14.474-16.621
	c-3.248,2.839-7.136,4.491-11.12,4.982c-6.631,0.816-13.533-1.576-18.244-6.987l-14.49-16.62
	c-7.426,6.466-18.118,6.718-25.781,1.227c-3.93,5.926-3.616,13.958,1.283,19.582l3.846,4.405c7.55,8.658,20.691,9.557,29.365,2.005
	l14.49,16.62c4.711,5.41,11.613,7.803,18.244,6.987c3.985-0.49,7.872-2.142,11.12-4.982l14.474,16.622
	c4.728,5.424,11.629,7.801,18.26,6.985c3.985-0.491,7.874-2.127,11.122-4.966l7.866,6.798c7.552,8.673,20.708,9.57,29.382,2.018
	l10.693-9.329l89.896-70.012l0.097-0.089l35.468-0.035l-3.924-31.876L379.731,267.833z"/>
        <path fill="#F9C295" d="M396.101,313.533l-48.165-41.53l-13.394-11.54l-9.584-8.254l-41.207-35.52l4.759-40.51
	c1.61-13.701-7.015-26.528-20.311-30.207l-89.825-24.855c-9.504-2.63-19.549,1.78-24.045,10.557l-11.296,22.05l-48.488-3.291
	l-12.42,105.724l-5.398,45.945l47.198,3.139l0.098,0.089l98.602,84.993l10.745,9.27c8.715,7.504,21.866,6.534,29.37-2.181
	l14.38-16.686c3.263,2.821,7.162,4.436,11.15,4.905c6.635,0.78,13.523-1.636,18.221-7.086l14.382-16.701
	c3.263,2.821,7.16,4.452,11.148,4.92c6.635,0.78,13.524-1.651,18.205-7.088l14.397-16.7c8.715,7.504,21.851,6.532,29.353-2.168
	l3.822-4.427C403.64,329.601,402.882,319.375,396.101,313.533z"/>
        <g>
          <path fill="#E59F6A" d="M396.101,313.533l-14.671-12.65c4.768,6.323,4.67,15.318-0.711,21.564l-4.057,4.699
		c-7.964,9.235-21.908,10.267-31.16,2.301l-15.284,17.728c-4.969,5.771-12.282,8.351-19.326,7.524
		c-4.233-0.497-8.37-2.228-11.834-5.223l-15.268,17.73c-4.987,5.785-12.298,8.349-19.342,7.522
		c-4.233-0.497-8.372-2.212-11.836-5.207l-15.266,17.714c-2.876,3.341-6.539,5.592-10.474,6.752l6.499,5.607
		c8.715,7.504,21.866,6.534,29.37-2.181l14.38-16.686c3.263,2.821,7.162,4.436,11.15,4.905c6.635,0.779,13.523-1.636,18.221-7.086
		l14.382-16.701c3.263,2.821,7.16,4.452,11.148,4.92c6.635,0.78,13.524-1.651,18.205-7.088l14.397-16.7
		c8.715,7.504,21.851,6.532,29.353-2.168l3.822-4.427C403.64,329.601,402.882,319.375,396.101,313.533z"/>
          <path fill="#E59F6A" d="M369.5,337.416l-26.392-22.756c-3.135-2.704-7.872-2.354-10.578,0.783
		c-2.705,3.137-2.354,7.873,0.783,10.578l26.345,22.716l4.966-5.76c1.982,1.707,4.199,2.952,6.52,3.791
		C372.857,343.719,372.25,339.787,369.5,337.416z"/>
          <path fill="#E59F6A" d="M327.303,365.627c1.807-3.065,1.228-7.074-1.562-9.48l-23.708-20.441
		c-3.137-2.704-7.872-2.354-10.578,0.783c-2.705,3.137-2.354,7.873,0.783,10.578l23.708,20.441c0.01,0.008,0.02,0.015,0.03,0.023
		l4.898-5.688C322.827,363.532,325.011,364.785,327.303,365.627z"/>
        </g>
        <g>
          <path fill="#F29F5C" d="M126.385,305.135l-5.713,7.544c-6.221,8.215-4.605,19.918,3.61,26.14l0,0
		c8.215,6.221,19.918,4.605,26.14-3.61l5.713-7.544c6.221-8.215,4.605-19.918-3.61-26.14l0,0
		C144.31,295.304,132.606,296.92,126.385,305.135z"/>
          <path fill="#F29F5C" d="M161.181,321.002l-10.759,14.207c-6.221,8.215-4.605,19.918,3.61,26.14l0,0
		c8.215,6.221,19.918,4.605,26.14-3.61l10.759-14.207c6.221-8.215,4.605-19.918-3.61-26.14l0,0
		C179.105,311.171,167.402,312.787,161.181,321.002z"/>
          <path fill="#F29F5C" d="M194.834,338.377l-14.663,19.362c-6.221,8.215-4.605,19.918,3.61,26.14l0,0
		c8.215,6.221,19.918,4.605,26.14-3.61l14.663-19.362c6.221-8.215,4.605-19.918-3.61-26.14l0,0
		C212.759,328.545,201.056,330.162,194.834,338.377z"/>
          <path fill="#F29F5C" d="M225.435,359.783l-15.514,20.485c-6.221,8.215-4.605,19.918,3.61,26.14l0,0
		c8.215,6.221,19.918,4.605,26.14-3.61l15.514-20.485c6.221-8.215,4.605-19.918-3.61-26.14l0,0
		C243.359,349.952,231.656,351.568,225.435,359.783z"/>
          <path fill="#F29F5C" d="M380.89,146.433l-47.25-26.591c-5.04-2.836-10.824-4.07-16.583-3.538l-74.606,6.9
		c-9.171,0.848-17.366,6.081-21.993,14.045l-52.584,90.508c-3.883,6.684-0.835,15.254,6.396,17.985l2.151,0.812
		c19.275,7.28,41.043,1.085,53.596-15.252l20.147-26.22c0,0,48.429,56.073,101.749-9.41"/>
        </g>
        <path fill="#5C9CEE" d="M511.945,309.145l-24.713-200.751c-0.243-1.974-1.26-3.771-2.828-4.995
	c-1.568-1.224-3.557-1.774-5.532-1.532l-57.788,7.114c-15.009,1.848-25.716,15.562-23.868,30.57l19.844,161.2
	c1.708,13.877,13.559,24.076,27.2,24.076c1.112,0,2.239-0.068,3.37-0.207l57.788-7.114
	C509.528,316.999,512.451,313.256,511.945,309.145z"/>
        <path fill="#3580D3" d="M511.945,309.145l-2.713-22.036c-1.23,1.805-3.194,3.095-5.532,3.383l-60.577,7.457
	c-1.186,0.146-2.367,0.217-3.533,0.217c-10.2,0-19.441-5.442-24.553-13.84l2.022,16.424c1.708,13.877,13.559,24.076,27.2,24.076
	c1.112,0,2.239-0.068,3.37-0.207l57.788-7.114C509.528,316.999,512.451,313.256,511.945,309.145z"/>
        <path fill="#ED5575" d="M90.918,108.98l-57.788-7.114c-1.977-0.243-3.964,0.308-5.532,1.532
	c-1.568,1.224-2.585,3.021-2.828,4.995L0.057,309.145c-0.506,4.111,2.417,7.854,6.527,8.36l57.788,7.114
	c1.132,0.139,2.257,0.207,3.37,0.207c13.64,0,25.492-10.2,27.2-24.076l19.844-161.2C116.634,124.542,105.927,110.828,90.918,108.98z
	"/>
        <path fill="#CC3A60" d="M0.057,309.145l2.713-22.036c1.23,1.805,3.194,3.095,5.532,3.383l60.577,7.457
	c1.186,0.146,2.367,0.217,3.533,0.217c10.2,0,19.441-5.442,24.553-13.84l-2.022,16.424c-1.708,13.877-13.559,24.076-27.2,24.076
	c-1.112,0-2.239-0.068-3.37-0.207l-57.788-7.114C2.473,316.999-0.449,313.256,0.057,309.145z"/>
        <g>
          <circle fill="#EBEEF2" cx="464" cy="277.001" r="14.498" />
          <circle fill="#EBEEF2" cx="47.19" cy="277.001" r="14.498" />
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </svg>

    );
  }

  const OrgSvg = () => {
    return (
      <svg width="100px" height="100px" viewBox="0 -47 450.78 450" xmlns="http://www.w3.org/2000/svg"><path d="m306.511719 149.519531h144.269531v57.902344h-144.269531zm0 0" fill="#00efd1" />
        <g fill="#00acea">
          <path d="m306.511719 297.191406h98.878906v57.898438h-98.878906zm0 0" />
          <path d="m306.511719 2.851562h98.878906v57.898438h-98.878906zm0 0" />
          <path d="m166.75 121.570312v113.800782l-83.371094 26.890625-.988281-.320313v-113.472656l.097656-.296875.890625.289063zm0 0" />
        </g>
        <path d="m166.75 121.570312-83.371094 26.890626-.890625-.289063-82.488281-26.601563 83.378906-26.890624zm0 0" fill="#00efd1" />
        <path d="m82.488281 148.171875-.097656.296875v113.472656l-82.390625-26.570312v-113.800782zm0 0" fill="#2ed3ff" />
        <path d="m233.390625 59.46875h16v91h-16zm0 0" fill="#f4b844" />
        <path d="m233.230469 206.890625.160156 89.847656v.730469h15.917969l-.097656-90.410156zm0 0" fill="#f4b844" />
        <path d="m241.191406 61.199219c-16.796875.003906-30.410156-13.609375-30.410156-30.402344-.003906-16.792969 13.613281-30.40625 30.40625-30.40625s30.40625 13.617187 30.402344 30.410156c0 16.789063-13.609375 30.398438-30.398438 30.398438zm0 0" fill="#fedb41" />
        <path d="m241.191406 208.878906c-16.796875.007813-30.417968-13.605468-30.421875-30.402344-.003906-16.796874 13.609375-30.414062 30.40625-30.417968 16.796875 0 30.414063 13.613281 30.414063 30.410156 0 16.792969-13.609375 30.40625-30.398438 30.410156zm0 0" fill="#fedb41" /><path d="m241.308594 295.738281c16.816406.035157 30.429687 13.683594 30.410156 30.5-.015625 16.816407-13.652344 30.441407-30.46875 30.441407s-30.453125-13.625-30.46875-30.441407c-.019531-16.816406 13.59375-30.464843 30.410156-30.5zm0 0" fill="#fedb41" />
      </svg>
    );
  }

  const SaveSvg = () => {
    return (
      <svg width="100px" height="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 512 512">
        <g>
          <path fill="#7FDECF" d="M423.358,394.937c-1.499-2.182-3.977-3.487-6.625-3.487h-96.439c-2.551,0-4.95,1.211-6.465,3.262
		c-1.515,2.051-1.966,4.7-1.217,7.138l32.146,104.476c1.038,3.372,4.154,5.673,7.681,5.673h24.11c3.326,0,6.307-2.048,7.501-5.151
		l40.183-104.476C425.184,399.9,424.856,397.12,423.358,394.937z"/>
          <path fill="#7FDECF" d="M191.707,391.451H95.268c-2.648,0-5.126,1.304-6.625,3.487c-1.499,2.183-1.826,4.964-0.876,7.435
		l40.183,104.476c1.193,3.103,4.176,5.151,7.501,5.151h24.11c3.528,0,6.643-2.301,7.681-5.673l32.146-104.476
		c0.75-2.437,0.298-5.086-1.217-7.138C196.657,392.661,194.258,391.451,191.707,391.451z"/>
          <path fill="#7FDECF" d="M414.01,231.219l-13.406-113.952c-0.639-5.433-6.672-8.7-11.576-6.249l-78.795,39.398
		c-17.535-5.376-35.763-8.1-54.233-8.1s-36.699,2.723-54.233,8.1l-78.795-39.398c-4.903-2.452-10.937,0.819-11.576,6.249
		L97.99,231.219c-17.559,28.864-26.832,61.995-26.832,95.939C71.158,429.08,154.078,512,256,512s184.842-82.92,184.842-184.842
		C440.842,293.212,431.57,260.081,414.01,231.219z"/>
        </g>
        <g>
          <path fill="#55D4BE" d="M264.037,487.868c-101.922,0-184.842-82.92-184.842-184.842c0-15.702,2.009-31.221,5.88-46.233
		c-9.141,22.197-13.916,46.068-13.916,70.365C71.158,429.08,154.078,512,256,512c86.05,0,158.553-59.105,179.049-138.851
		C407.373,440.398,341.149,487.868,264.037,487.868z"/>
          <path fill="#55D4BE" d="M386.864,206.824l-6.192-52.636c-0.306-2.601-1.86-4.889-4.164-6.133
		c-2.306-1.244-5.069-1.288-7.413-0.117l-43.346,21.674c-2.6,1.3-4.295,3.903-4.433,6.807c-0.138,2.903,1.303,5.656,3.768,7.197
		l49.539,30.962c1.304,0.815,2.782,1.222,4.259,1.222c1.494,0,2.989-0.416,4.301-1.248
		C385.793,212.898,387.225,209.894,386.864,206.824z"/>
          <path fill="#55D4BE" d="M186.251,169.613l-43.347-21.674c-2.341-1.171-5.106-1.128-7.412,0.117
		c-2.305,1.244-3.858,3.532-4.164,6.133l-6.192,52.636c-0.361,3.07,1.07,6.074,3.682,7.728c1.313,0.832,2.806,1.248,4.301,1.248
		c1.478,0,2.956-0.407,4.259-1.222l49.539-30.962c2.465-1.541,3.906-4.293,3.768-7.197
		C190.547,173.516,188.851,170.913,186.251,169.613z"/>
        </g>
        <g>
          <path fill="#24BFB2" d="M344.403,270.901c-4.438,0-8.037-3.598-8.037-8.037c0-4.431-3.605-8.037-8.037-8.037
		s-8.037,3.605-8.037,8.037c0,4.438-3.598,8.037-8.037,8.037s-8.037-3.598-8.037-8.037c0-13.295,10.816-24.11,24.11-24.11
		s24.11,10.815,24.11,24.11C352.439,267.303,348.841,270.901,344.403,270.901z"/>
          <path fill="#24BFB2" d="M199.744,270.901c-4.438,0-8.037-3.598-8.037-8.037c0-4.431-3.605-8.037-8.037-8.037
		s-8.037,3.605-8.037,8.037c0,4.438-3.598,8.037-8.037,8.037s-8.037-3.598-8.037-8.037c0-13.295,10.815-24.11,24.11-24.11
		s24.11,10.815,24.11,24.11C207.78,267.303,204.183,270.901,199.744,270.901z"/>
        </g>
        <path fill="#D4F4EF" d="M256,270.901c-31.019,0-56.256,19.828-56.256,44.201s25.237,44.201,56.256,44.201
	c31.02,0,56.256-19.828,56.256-44.201S287.02,270.901,256,270.901z"/>
        <path fill="#AAE9DF" d="M256,343.231c-27.525,0-50.482-15.617-55.307-36.165c-0.613,2.608-0.949,5.291-0.949,8.037
	c0,24.373,25.237,44.201,56.256,44.201c31.02,0,56.256-19.828,56.256-44.201c0-2.746-0.337-5.429-0.949-8.037
	C306.482,327.613,283.526,343.231,256,343.231z"/>
        <g>
          <path fill="#24BFB2" d="M231.89,327.158c-3.325,0-6.391-2.134-7.538-5.255c-1.142-3.108-0.221-6.748,2.318-8.895
		c2.627-2.221,6.479-2.536,9.418-0.737c2.837,1.735,4.337,5.155,3.68,8.417C239.018,324.4,235.689,327.158,231.89,327.158z"/>
          <path fill="#24BFB2" d="M280.11,327.158c-3.324,0-6.393-2.134-7.538-5.255c-1.141-3.109-0.221-6.748,2.318-8.895
		c2.626-2.221,6.479-2.536,9.418-0.737c2.836,1.735,4.337,5.156,3.68,8.417C287.237,324.399,283.908,327.158,280.11,327.158z"/>
          <path fill="#24BFB2" d="M256,397.636c-27.579,0-54.157-8.18-76.86-23.655c-3.668-2.499-4.614-7.499-2.114-11.167
		c2.499-3.667,7.5-4.613,11.167-2.114c20.024,13.648,43.472,20.863,67.808,20.863c24.335,0,47.781-7.214,67.803-20.861
		c3.668-2.498,8.667-1.554,11.167,2.115c2.499,3.668,1.553,8.667-2.114,11.167C310.154,389.458,283.577,397.636,256,397.636z"/>
        </g>
        <path fill="#FBDC40" d="M256,0c-38.59,0-69.986,31.395-69.986,69.986s31.395,69.986,69.986,69.986
	s69.986-31.396,69.986-69.986S294.59,0,256,0z"/>
        <path fill="#FAD000" d="M256,13.73c-31.019,0-56.256,25.237-56.256,56.256s25.237,56.256,56.256,56.256
	s56.256-25.237,56.256-56.256S287.02,13.73,256,13.73z"/>
        <path fill="#FA892D" d="M264.037,61.949h-16.073V45.876l7.936-0.005c0.034,0,0.066,0.005,0.1,0.005
	c0.035,0,0.068-0.005,0.103-0.005l7.933-0.005c0,0,0,0.003,0,0.01c0,4.438,3.598,8.037,8.037,8.037s8.037-3.598,8.037-8.037
	c0-8.862-7.211-16.073-16.073-16.073c0-4.438-3.598-8.037-8.037-8.037c-4.438,0-8.037,3.598-8.037,8.037
	c-8.862,0-16.073,7.211-16.073,16.073v16.073c0,8.862,7.211,16.073,16.073,16.073h16.073v16.073h-16.073
	c0-4.438-3.598-8.037-8.037-8.037c-4.438,0-8.037,3.598-8.037,8.037c0,8.862,7.211,16.073,16.073,16.073
	c0,4.438,3.598,8.037,8.037,8.037c4.438,0,8.037-3.598,8.037-8.037c8.862,0,16.073-7.211,16.073-16.073V78.023
	C280.11,69.159,272.9,61.949,264.037,61.949z"/>
        <g>
          <path fill="#FBA761" d="M489.062,230.718h-8.037v-8.037c0-4.438-3.598-8.037-8.037-8.037c-4.438,0-8.037,3.598-8.037,8.037
		v8.037h-8.037c-4.438,0-8.037,3.598-8.037,8.037c0,4.438,3.598,8.037,8.037,8.037h8.037v8.037c0,4.438,3.598,8.037,8.037,8.037
		c4.438,0,8.037-3.598,8.037-8.037v-8.037h8.037c4.438,0,8.037-3.598,8.037-8.037C497.099,234.317,493.5,230.718,489.062,230.718z"
          />
          <path fill="#FBA761" d="M392.623,29.803h-8.037v-8.037c0-4.438-3.598-8.037-8.037-8.037c-4.438,0-8.037,3.598-8.037,8.037
		v8.037h-8.037c-4.438,0-8.037,3.598-8.037,8.037s3.598,8.037,8.037,8.037h8.037v8.037c0,4.438,3.598,8.037,8.037,8.037
		c4.438,0,8.037-3.598,8.037-8.037v-8.037h8.037c4.438,0,8.037-3.598,8.037-8.037S397.061,29.803,392.623,29.803z"/>
          <path fill="#FBA761" d="M55.084,182.499h-8.037v-8.037c0-4.438-3.598-8.037-8.037-8.037s-8.037,3.598-8.037,8.037v8.037
		h-8.037c-4.438,0-8.037,3.598-8.037,8.037c0,4.438,3.598,8.037,8.037,8.037h8.037v8.037c0,4.438,3.598,8.037,8.037,8.037
		s8.037-3.598,8.037-8.037v-8.037h8.037c4.438,0,8.037-3.598,8.037-8.037C63.121,186.097,59.524,182.499,55.084,182.499z"/>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </svg>
    );
  }

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(min-width: 1200px)'
  })

  const isTabletOrMobileDeviceMax = useMediaQuery({
    query: '(max-width: 1500px)'
  })

  const isLgDesktop = useMediaQuery({
    query: '(min-width: 1501px)'
  })

  return (
    <Container id="app" fluid>

      <Header>
        <Top>
          <TopLeft>
            <TopTitle>SeuMercado</TopTitle>
          </TopLeft>

          <TopRight>
            <TopText bRight="1px solid rgba(255, 255, 255, 0.4)">alsmakmsakma</TopText>
            <EmailDiv>
              <EmailSvg />
              <TopText>Emai@hotmail.com</TopText>
            </EmailDiv>
          </TopRight>
        </Top>

        <Bottom>
          <Left>
            <LeftTitle>Sistema de Gerenciamento SeuMercado</LeftTitle>
            <LeftText>
              Sistema feito para Supermercados, Mercadinhos e Mercantis com o intuíto com que o contratante gerencie seus Produtos, Tráfego de usuários e pedidos feitos
              em seu estabelecimento. App SeuMercado disponível na PlayStore.
              </LeftText>
          </Left>

          <Form onSubmit={handleSubmit}>
            <TitleForm>Faça seu login</TitleForm>

            <TextField
              style={{ marginTop: 20, width: wBtn }}
              label="Email"
              type="email"
              autoComplete="current-email"
              variant="outlined"
              onChange={handleEmail}
            />
            <TextField
              style={{ marginTop: 20, width: wBtn }}
              label="Senha"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={handlePassword}
            />
            <Button style={{ marginTop: 20, width: wBtn, height: 50, fontSize: 18 }} type="submit" variant="contained" color="secondary">Finalizar</Button>
          </Form>

        </Bottom>

        {isTabletOrMobileDevice &&
          <svg id="svg" style={{ marginTop: isTabletOrMobileDeviceMax ? -220 : -350, display: 'flex' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,240C672,256,768,224,864,192C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        }

      </Header>

      <Content>
        <ContentTop>
          <ContentTitle>Confira nosso serviços</ContentTitle>
          <ContentSubtitle>Junte-se a nós no nosso Sistema de Gerenciamento feito para pessoas que querem mais organização e agilidade em seu estabelecimento</ContentSubtitle>
        </ContentTop>

        <ContentBottom>

          <ContentBlock>
            <HandsSvg />
            <ContentText>Menos trabalho</ContentText>
            <ContentSubtext>Em nosso sistema, tudo o que você precisa fazer é cadastrar seus produtos. Nós garantimos todas funcionalidades possíveis, como, Notificação de novos pedidos, Sistema de busca.</ContentSubtext>
          </ContentBlock>

          <ContentBlock>
            <OrgSvg />
            <ContentText>Mais organização</ContentText>
            <ContentSubtext>Aqui você não se perde, temos tabelas organizadas a seu gosto e em tópicos separados visando a melhor experiência do usuário.</ContentSubtext>
          </ContentBlock>

          <ContentBlock>
            <SaveSvg />
            <ContentText>Você economiza</ContentText>
            <ContentSubtext>Mais barato que você comprar um site/app, e ainda garantimos 150% de novos clientes com nosso sistema de Marketing.</ContentSubtext>
          </ContentBlock>
        </ContentBottom>
      </Content>


    </Container>
  );
}


export default App;