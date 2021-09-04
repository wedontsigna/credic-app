import React from 'react'

const TestContext = React.createContext({
    c_identifier:"wedo"
})

export const TestProvider = TestContext.Provider
export const TestConsumer = TestContext.Consumer

export default TestContext