

    import cucumber.api.CucumberOptions;
	import cucumber.api.junit.Cucumber;
	import org.junit.runner.RunWith;

	@RunWith(Cucumber.class)
	@CucumberOptions(plugin = {"pretty", "html:target/cucumber"}, tags="@skip")
	
	
    public class RunnerClass {
	

}
