import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('Choices shows up when you click draw button', async () => {
    await driver.sleep(2000)
    await driver.findElement(By.id(`draw`)).click()
    await driver.sleep(2000)
    const choicesDiv = await driver.findElement(By.id('choices'))
    const displayed = await choicesDiv.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking add to duo button displays the card duo selected', async () => {
    await driver.findElement(By.id(`draw`)).click()
    await driver.sleep(2000)
    driver.findElement(By.xpath("(//button[@class='bot-btn'])[3]")).click()
    await driver.sleep(2000)
    const duoDiv = await driver.findElement(By.id('player-duo'))
    const displayed = await duoDiv.isDisplayed()
    expect(displayed).toBe(true)
})