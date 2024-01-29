
import {   
        BoxChartContainer,
        BoxChart01,
        BoxChart02,
        Line,
        Number,
        GreenLine,
        YellowLine,
        List,
        Ul,
        ListItem,
        Span08,
        ChartDiv,

} from './box.styles'

const index = () => {
  return (
    <div>
            <BoxChartContainer>
                <ChartDiv>
                <BoxChart01>
                    <Span08>Order</Span08>
                    <Line>
                        <GreenLine />
                        <YellowLine/>
                    </Line>
                    <List>
                            <ul>
                                <ListItem>Pending Orders:  <Number color="#FFA500">20</Number></ListItem>
                                <ListItem>Reconcilled Orders:  <Number color="#008000">80</Number></ListItem>
                                <ListItem>Total Orders: <Number color="#0000FF">100</Number></ListItem>
                            </ul>
                    </List>
                </BoxChart01>
                </ChartDiv> 
               
                <ChartDiv>
                <BoxChart02>
                    <Span08>Payment</Span08>
                    <Line>
                        <GreenLine />
                        <YellowLine />
                    </Line>
                    <List>
                            <Ul>
                                <ListItem>Pending Orders: <Number color="#FFA500">20</Number></ListItem>
                                <ListItem>Reconcilled Orders: <Number color="#008000">80</Number></ListItem>
                                <ListItem>Total Orders: <Number color="#0000FF">100</Number></ListItem>
                            </Ul>
                    </List>
                </BoxChart02>
                </ChartDiv> 
              
            </BoxChartContainer>
    </div>
  )
}

export default index
