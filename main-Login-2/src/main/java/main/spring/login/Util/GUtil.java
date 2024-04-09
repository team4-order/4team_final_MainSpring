package main.spring.login.Util;



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class GUtil {
    private static final String URL = "jdbc:mariadb://3.35.197.144:3306/users?useSSL=false";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "1234";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

}
