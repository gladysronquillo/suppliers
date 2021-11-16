package com.pichincha.suppliers.core.util.utility;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

import org.apache.commons.lang3.math.NumberUtils;

public class AppConstants {

	public static final int TABLE_SIZE = 20;
	public static final String JSON_VIEW = "jackson-page-with-jsonview";
	public static final String COMMA_SEPARATOR = ",";
	public static final String COMMA_BLANK_SEPARATOR = ", ";
	public static final String SLASH_SEPARATOR = "/";
	public static final String SLASH_BLANK_SEPARATOR = " / ";
	public static final String PIPE_SEPARATOR = "|";
	public static final String TWO_POINTS_SEPARATOR = ":";
	public static final String ARROW_SEPARATOR = " => ";
	public static final String TWO_OPEN_BRACES = "{{";
	public static final String TWO_CLOSE_BRACES = "}}";
	public static final String BLANK_LINE_BLANK_SEPARATOR = " - ";
	public static final String LINE_BLANK_SEPARATOR = "- ";
	public static final String BLANK_SEPARATOR = " ";
	public static final String EMPTY = "";
	public static final String HYPHEN_SEPARATOR = "-";
	public static final String POINT_SEPARATOR = ".";
	public static final String LINE_BREAK_SEPARATOR = "\n";
	public static final String LINE_BREAK_TAG = "<br>";
	public static final String UL = "UL";
	public static final int RULE_PRIORITY_ZERO = 0;
	public static final int RULE_PRIORITY_ONE = 1;
	public static final int RULE_PRIORITY_TWO = 2;
	public static final int RULE_PRIORITY_THREE = 3;
	public static final int RULE_PRIORITY_FOUR = 4;
	public static final int RULE_PRIORITY_FIVE = 5;
	public static final int RULE_PRIORITY_SIX = 6;
	public static final int RULE_PRIORITY_SEVEN = 7;
	public static final int RULE_PRIORITY_EIGHT = 8;
	public static final int RULE_PRIORITY_NINE = 9;
	public static final int DAYS_OF_THE_YEAR = 365;
	public static final LocalDate FIRST_JAVA_DATE = (new Date(NumberUtils.INTEGER_ONE)).toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
	public static final String FORMAT_TIME_HH_MM = "hh:mm";
	public static final String FORMAT_DATE_DD_MM_YYYY = "dd/MM/YYYY";
	public static final String FORMAT_DATE_YYYYMMDD = "YYYY-MM-dd";
	public static final String FORMAT_DATE_YYYY_MM_DD = "yyyy-MM-dd";
	public static final String FORMAT_DATE_YY = "YY";
	public static final String FORMAT_DATE_DDMMYYYY = "ddMMyyyy";
	public static final String FORMAT_DATE_YYYY_MM_DD_HH_MM_SS = "yyyy-MM-dd HH:mm:ss";
	public static final String FORMAT_DATE_DDMMYYYYHHMMSS = "dd/MM/YYYY HH:mm:ss";
	public static final String PREFIX_PBX = "PBX: ";
	public static final String PREFIX_EXTENSION = " - Ext. ";
	public static final String LONG_FORMAT_DECIMAL = "###,###.##";
	public static final String LONG_FORMAT_GROUP_TWO_DECIMAL_DEFAULT_ZERO = "###,##0.00";
	public static final String LONG_FORMAT_GROUP_THREE_DECIMAL_DEFAULT_ZERO = "###,###0.000";
	public static final String LONG_FORMAT_GROUP_THREE_DECIMAL = "###,###.###";
	public static final String NO_SPECIAL_CHARACTERS = "[^\\p{L}\\p{Digit} ]";
	public static final String LEGAL_FILE_NAME = "[\\\\/:*?\\\"<>|]";
	public static final String LONG_FORMAT_DATE = "dd' de 'MMMM' de 'YYYY";
	public static final String PATTERN_POINT = "\\.";
	public static final String PATTERN_WHITE_SPACE = "\\s+";
	public static final String PATTERN_NORMALIZE = "[^\\p{ASCII}]";
	public static final String YES = "SÍ";
	public static final String NO = "NO";
	public static final String X = "X";
	public static final String CLOSE_ROW_TAG = "</tr>";
	public static final String ADMINISTRATOR_USER_NAME = "Administrador";
	public static final String SET = "set";
	public static final String GET = "get";
		
	public static final String REPLACE_CHAR_ZERO= "{0}";
	public static final String REPLACE_CHAR_ONE = "{1}";
	public static final String REPLACE_CHAR_TWO = "{2}";
	
	public static final String ONLY_ALPHABET_WITH_NUMBERS = "^[a-zA-Z0-9]*$";
	public static final String DOLLAR_SIGN = "$";

}
