export default function Page() {
  return     <>
  <form>
      <fieldset>
          <legend>Biological Sex</legend>
          <label>
              <input type="radio" name="biologicalSex" value="male" required/> Male
          </label><br/>
          <label>
              <input type="radio" name="biologicalSex" value="female"/> Female
          </label>
      </fieldset>
      <br/><br/>
      <fieldset>
          <legend>Identify as</legend>
          <label>
              <input type="radio" name="identifyAs" value="male" required/> Male
          </label><br/>
          <label>
              <input type="radio" name="identifyAs" value="female"/> Female
          </label><br/>
          <label>
              <input type="radio" name="identifyAs" value="nonbinary"/> Non-Binary
          </label>
      </fieldset>
      <br/><br/>
      <fieldset>
          <legend>Looking For</legend>
          <label>
              <input type="checkbox" name="lookingFor" value="male"/> Male
          </label><br/>
          <label>
              <input type="checkbox" name="lookingFor" value="female"/> Female
          </label><br/>
          <label>
              <input type="checkbox" name="lookingFor" value="nonbinary"/> Non-Binary
          </label>
      </fieldset> 
      <br/><br/>
  </form></>;
}
