import React from 'react';
import { Container, Cover, Content } from './CardG.styles';
import { TabsComponent } from "../TabsComponent/TabsComponent";
// import { H2 } from '../../../1.atoms/Heading/H2/H2';
import * as I from './CardG.types';

export const CardG = ({ title, text }: I.CardG) => {
    return(
        <>
            <Container>
                <Cover>
                    {/* <Image src={workplace} /> */}
                </Cover>
                <Content>
                    
                    <div style={{ margin: "30px 0px"}}>
                        {/* <H2 textAlign='center'>{title}</H2> */}
                    </div>

                    <TabsComponent />

                </Content>
            </Container>
        </>
    );
};
