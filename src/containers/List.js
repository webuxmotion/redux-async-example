import React from 'react'
import Row from '../components/Eds/Row/Row'
import Accordion from '../components/Eds/Accordion/Accordion'
import Dummy from 'edsukraine-dummy-react-npm-module'

const MyCom = () => (<div style={{width: '200px', border: '1px solid red'}}>Testttd</div>)

const Button = ({onCollapseHandler}) => (
  <div>
    <button onClick={onCollapseHandler}>First button</button>
    <button>Second button</button>
  </div>
)

const Button2 = ({onCollapseHandler, red = false}) => (
  <div>
    <button>1</button>
    <button onClick={onCollapseHandler} style={{ background: red ? 'red' : null}}>2</button>
  </div>
)

const List = () => {

  return (
    <div className="list">
      <Dummy />
      <img src="example.png" width="300" />
      <a href="https://www.behance.net/gallery/90952425/Selected-Web-and-UIUX-Projects-2019?tracking_source=search_projects_recommended%7Caccordion%20ui" target="_blank">Design</a>
      
      <div style={{
        padding: '20px'
      }}>
        <Accordion
          header={<h2>Increases energy and stamina</h2>}
          content={
            <div style={{
              padding: '20px'
            }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          }
        />
        <div style={{height: '10px'}}></div>
        <Accordion
          header={<h2>Increases energy and stamina</h2>}
          content={
            <div style={{
              padding: '20px'
            }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          }
        />
      </div>
      
      <table>
        <tbody>
          <Row 
            columns={[
              'First td',
              (data) => <Button2 {...data} red={true} />
            ]}
            collapse={{
              component: <MyCom />,
              icon: true,
              triggerId: 1
            }}
          />
          <Row 
            columns={[
              'First td',
              (data) => <Button {...data} />
            ]}
            collapse={{
              component: <MyCom />,
              triggerId: 1
            }}
          />
          <Row
            columns={[
              'First td',
              'Second td',
              'Third td',
            ]}
            collapse={{
              component: <MyCom />
            }}
          />
        </tbody>
      </table>
    </div>
  )
}

export default List
