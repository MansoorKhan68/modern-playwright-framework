import { test, expect } from "@playwright/test"
import {Auth} from '../../pages/auth'

test.describe('Authentication test', () =>{
    test('Test user can open login page @smoke', async ({page}) => {
        const auth = new Auth(page);
      
    })
    
})
