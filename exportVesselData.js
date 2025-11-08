const XLSX = require("xlsx");

// Sample data
const data = [
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "CCS Orchid",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "Century Beijing",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "Century Shanghai",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "Century Xiamen",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "Century Zhengzhou",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "Great Ocean",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "ML Heron",
                "totalUsers": 1,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 1,
                "totalEnrolledUsers": 1,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "ML Swallow",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "Ocean Jasmin",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Century Synergy Ship Management Co.,Limited.",
                "vesselName": "QI Cheng 3",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "BALSA 85",
                "totalUsers": 7,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 6,
                "totalEnrolledUsers": 7,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Berge Nishikawa",
                "totalUsers": 3,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 3,
                "totalEnrolledUsers": 3,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Canon Trader",
                "totalUsers": 13,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 13,
                "totalEnrolledUsers": 13,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "ECO Trader",
                "totalUsers": 16,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 14,
                "totalEnrolledUsers": 16,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Eva Global",
                "totalUsers": 36,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Eva Istanbul",
                "totalUsers": 19,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 19,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "EVA Linden",
                "totalUsers": 18,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "EVA RICHMOND",
                "totalUsers": 15,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 15,
                "totalEnrolledUsers": 15,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Great Trader",
                "totalUsers": 21,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Hudson Trader",
                "totalUsers": 15,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 15,
                "totalEnrolledUsers": 15,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "IVS Progress",
                "totalUsers": 12,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 11,
                "totalEnrolledUsers": 12,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "IVS Trader",
                "totalUsers": 12,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 12,
                "totalEnrolledUsers": 12,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Nord Houston",
                "totalUsers": 17,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 17,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Season Trader",
                "totalUsers": 12,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 12,
                "totalEnrolledUsers": 12,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Success Trader",
                "totalUsers": 17,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 17,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Tendra Trader",
                "totalUsers": 5,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 5,
                "totalEnrolledUsers": 5,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Columbus Shipmanagement Inc. Manila",
                "vesselName": "Venture Dream",
                "totalUsers": 9,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 9,
                "totalEnrolledUsers": 9,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "DS Ship Management Pte Ltd (DSSM)",
                "vesselName": "Amber Eternity",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "DS Ship Management Pte Ltd (DSSM)",
                "vesselName": "Basic Glory",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "DS Ship Management Pte Ltd (DSSM)",
                "vesselName": "Basic Sun",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "DS Ship Management Pte Ltd (DSSM)",
                "vesselName": "Bright Cosmo",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "DS Ship Management Pte Ltd (DSSM)",
                "vesselName": "Bright Fuji",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "DS Ship Management Pte Ltd (DSSM)",
                "vesselName": "Crystal Enternity",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "DS Ship Management Pte Ltd (DSSM)",
                "vesselName": "Diamond Eternity",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "DS Ship Management Pte Ltd (DSSM)",
                "vesselName": "Gold Eternity",
                "totalUsers": 1,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 1,
                "totalEnrolledUsers": 1,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Fluyt Maritime Private Limited",
                "vesselName": "AMNS Polar",
                "totalUsers": 49,
                "isPasswordResetTrue": 12,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Fluyt Maritime Private Limited",
                "vesselName": "AMNS Tufmax",
                "totalUsers": 43,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Fluyt Maritime Private Limited",
                "vesselName": "AMNSI Maximus",
                "totalUsers": 52,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 48,
                "totalEnrolledUsers": 50,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 2
            },
            {
                "companyName": "Fluyt Maritime Private Limited",
                "vesselName": "AMNSI Stallion",
                "totalUsers": 48,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 48,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Fluyt Maritime Private Limited",
                "vesselName": "GCL Tapi",
                "totalUsers": 44,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Fluyt Maritime Private Limited",
                "vesselName": "GCL Yamuna",
                "totalUsers": 43,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Fluyt Maritime Private Limited",
                "vesselName": "TSV One",
                "totalUsers": 39,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Baltic Mantis",
                "totalUsers": 43,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Columbia",
                "totalUsers": 40,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Constantine",
                "totalUsers": 46,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Constellation",
                "totalUsers": 38,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Enterprise",
                "totalUsers": 46,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Freedom",
                "totalUsers": 36,
                "isPasswordResetTrue": 10,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Hornet",
                "totalUsers": 42,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Laddey",
                "totalUsers": 37,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Madeleine",
                "totalUsers": 40,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Magic",
                "totalUsers": 43,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Mary",
                "totalUsers": 36,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Mayflower",
                "totalUsers": 39,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Scorpion",
                "totalUsers": 41,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Titus",
                "totalUsers": 50,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 45,
                "totalEnrolledUsers": 50,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Vigilant",
                "totalUsers": 40,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Wasp",
                "totalUsers": 32,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Bulk Carriers Pvt Ltd",
                "vesselName": "Genco Weatherly",
                "totalUsers": 48,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 47,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Aquitaine",
                "totalUsers": 44,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Ardennes",
                "totalUsers": 47,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Auvergne",
                "totalUsers": 44,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Bourgogne",
                "totalUsers": 35,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Brittany",
                "totalUsers": 43,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Hunter",
                "totalUsers": 43,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Languedoc",
                "totalUsers": 32,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Picardy",
                "totalUsers": 37,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Predator",
                "totalUsers": 33,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 33,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Pyrenees",
                "totalUsers": 41,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Genco-Synergy Pvt Ltd",
                "vesselName": "Genco Rhone",
                "totalUsers": 42,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "General Ship Management Pte. Ltd.",
                "vesselName": "UOG Harriet G",
                "totalUsers": 44,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "General Ship Management Pte. Ltd.",
                "vesselName": "UOG Korthi",
                "totalUsers": 45,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "General Ship Management Pte. Ltd.",
                "vesselName": "UOG Kyma",
                "totalUsers": 40,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "General Ship Management Pte. Ltd.",
                "vesselName": "UOG Syros",
                "totalUsers": 41,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "No Company",
                "vesselName": "No Vessel",
                "totalUsers": 2218,
                "isPasswordResetTrue": 216,
                "isPasswordResetFalse": 2002,
                "totalEnrolledUsers": 2149,
                "usersStartedCourses": 107,
                "usersWithNoEnrollment": 69
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "ALAIA C W",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Anargya I",
                "totalUsers": 12,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 12,
                "totalEnrolledUsers": 12,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Andhika Vidyanata",
                "totalUsers": 6,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 6,
                "totalEnrolledUsers": 6,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Aqila S",
                "totalUsers": 4,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 4,
                "totalEnrolledUsers": 4,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Cordelia W",
                "totalUsers": 2,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 2,
                "totalEnrolledUsers": 2,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Falcon 19",
                "totalUsers": 5,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 5,
                "totalEnrolledUsers": 5,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Gas Althea",
                "totalUsers": 6,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 6,
                "totalEnrolledUsers": 6,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Gas Aurora",
                "totalUsers": 4,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 4,
                "totalEnrolledUsers": 4,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Gas Camellia",
                "totalUsers": 6,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 6,
                "totalEnrolledUsers": 6,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Geger Lintang",
                "totalUsers": 7,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 4,
                "totalEnrolledUsers": 7,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Griya Cirebon",
                "totalUsers": 23,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 23,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Griya Enim",
                "totalUsers": 7,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 7,
                "totalEnrolledUsers": 7,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Griya Ternate",
                "totalUsers": 5,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 5,
                "totalEnrolledUsers": 5,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Jabbar Energy",
                "totalUsers": 6,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 6,
                "totalEnrolledUsers": 6,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "M Patricia",
                "totalUsers": 5,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 5,
                "totalEnrolledUsers": 5,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Mahogani Banda",
                "totalUsers": 4,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 2,
                "totalEnrolledUsers": 4,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Malala VII",
                "totalUsers": 1,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 1,
                "totalEnrolledUsers": 1,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Maritim Khatulistiwa",
                "totalUsers": 6,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 6,
                "totalEnrolledUsers": 6,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Maritim Nusantara",
                "totalUsers": 4,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 4,
                "totalEnrolledUsers": 4,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Michelle XXV",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "MPMT XII",
                "totalUsers": 4,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 4,
                "totalEnrolledUsers": 4,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "MPMT XV",
                "totalUsers": 4,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 4,
                "totalEnrolledUsers": 4,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Mutiara Global",
                "totalUsers": 5,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 5,
                "totalEnrolledUsers": 5,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Narpatisuta",
                "totalUsers": 1,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 1,
                "totalEnrolledUsers": 1,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Naura 02",
                "totalUsers": 6,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 6,
                "totalEnrolledUsers": 6,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "New Stella",
                "totalUsers": 10,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 10,
                "totalEnrolledUsers": 10,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Noni T",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Olyvia T",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Permata Pioneer",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Queen Qadariah",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Ratu Ruwaidah",
                "totalUsers": 7,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 7,
                "totalEnrolledUsers": 7,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Ratu Zainab",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "S Kylian",
                "totalUsers": 12,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 10,
                "totalEnrolledUsers": 12,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "S Nicoleen",
                "totalUsers": 9,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 8,
                "totalEnrolledUsers": 9,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Semar 77",
                "totalUsers": 5,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 4,
                "totalEnrolledUsers": 5,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Sinar Agra",
                "totalUsers": 30,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 30,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Sinar Busan",
                "totalUsers": 4,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 4,
                "totalEnrolledUsers": 4,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Sinar Minahasa",
                "totalUsers": 35,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Sultan Zulkarnaoen",
                "totalUsers": 6,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 6,
                "totalEnrolledUsers": 6,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "P.T Synergy Marine Indonesia",
                "vesselName": "Sunrise Warrior",
                "totalUsers": 6,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 6,
                "totalEnrolledUsers": 6,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "PT Karunya Ship Management",
                "vesselName": "Ratu Damai",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "PT Karunya Ship Management",
                "vesselName": "Rimau Perkasa",
                "totalUsers": 29,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 29,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Spar Synergy Ship Management Private Limited",
                "vesselName": "Spar Apus",
                "totalUsers": 26,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 26,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Spar Synergy Ship Management Private Limited",
                "vesselName": "SPAR Capella",
                "totalUsers": 34,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Spar Synergy Ship Management Private Limited",
                "vesselName": "Spar Castor",
                "totalUsers": 25,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 25,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Spar Synergy Ship Management Private Limited",
                "vesselName": "Spar Corona",
                "totalUsers": 30,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 30,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Spar Synergy Ship Management Private Limited",
                "vesselName": "Spar Gemini",
                "totalUsers": 28,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 28,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Spar Synergy Ship Management Private Limited",
                "vesselName": "Spar Norma",
                "totalUsers": 24,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Spar Synergy Ship Management Private Limited",
                "vesselName": "SPAR Octans",
                "totalUsers": 28,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 28,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Spar Synergy Ship Management Private Limited",
                "vesselName": "Spar Rigel",
                "totalUsers": 26,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 26,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Korea Co Ltd",
                "vesselName": "HL Leader",
                "totalUsers": 38,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Korea Co Ltd",
                "vesselName": "HL Mercury",
                "totalUsers": 37,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Korea Co Ltd",
                "vesselName": "HL Port Hedland",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Korea Co Ltd",
                "vesselName": "HL Venus",
                "totalUsers": 31,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 31,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine (Singapore) pre ltd",
                "vesselName": "Dali",
                "totalUsers": 48,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine (Singapore) pre ltd",
                "vesselName": "Global Bonanza",
                "totalUsers": 16,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 16,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine (Singapore) pre ltd",
                "vesselName": "Incheon Voyager",
                "totalUsers": 17,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 17,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine (Singapore) pre ltd",
                "vesselName": "Lampard",
                "totalUsers": 47,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine (Singapore) pre ltd",
                "vesselName": "Texas Triumph",
                "totalUsers": 44,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Marine (Singapore) pre ltd",
                "vesselName": "Yeosu Voyager",
                "totalUsers": 20,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 20,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Amirante",
                "totalUsers": 43,
                "isPasswordResetTrue": 11,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Bungo Crown",
                "totalUsers": 25,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 24,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Hafnia Crux",
                "totalUsers": 47,
                "isPasswordResetTrue": 18,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 8,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Hafnia Libra",
                "totalUsers": 42,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Hafnia Lupus",
                "totalUsers": 38,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Hafnia Phoenix",
                "totalUsers": 41,
                "isPasswordResetTrue": 12,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 7,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "La Digue",
                "totalUsers": 38,
                "isPasswordResetTrue": 12,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Nord Marvel",
                "totalUsers": 15,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 13,
                "totalEnrolledUsers": 15,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Nord Maverick",
                "totalUsers": 20,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 12,
                "totalEnrolledUsers": 20,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Nord Miyabi",
                "totalUsers": 32,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 24,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Nord Superior",
                "totalUsers": 43,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Nord Volante",
                "totalUsers": 34,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Petite Soeur",
                "totalUsers": 44,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Copenhagen AS",
                "vesselName": "Vorias",
                "totalUsers": 36,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "Agroprosperis 1",
                "totalUsers": 29,
                "isPasswordResetTrue": 15,
                "isPasswordResetFalse": 14,
                "totalEnrolledUsers": 29,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "Al Agaila",
                "totalUsers": 42,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "Alhaya",
                "totalUsers": 42,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "CMC Ancud",
                "totalUsers": 43,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "Karadeniz Powership Arya Sultan",
                "totalUsers": 38,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "Karadeniz Powership Ayberk Bey",
                "totalUsers": 36,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "KUFRA",
                "totalUsers": 46,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "Lumina",
                "totalUsers": 44,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "Okee John T",
                "totalUsers": 50,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 43,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "Okee Ulf",
                "totalUsers": 46,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Germany GmbH",
                "vesselName": "Valery Roma",
                "totalUsers": 36,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Shanghai Limited",
                "vesselName": "Cape Zhongtuo",
                "totalUsers": 49,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 46,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Shanghai Limited",
                "vesselName": "Eastern Heather",
                "totalUsers": 53,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 45,
                "totalEnrolledUsers": 53,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Shanghai Limited",
                "vesselName": "JNS Friendship",
                "totalUsers": 38,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Shanghai Limited",
                "vesselName": "JNS Harmony",
                "totalUsers": 37,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Shanghai Limited",
                "vesselName": "JNS Ocean",
                "totalUsers": 34,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Shanghai Limited",
                "vesselName": "JNS Peace",
                "totalUsers": 31,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 31,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Shanghai Limited",
                "vesselName": "JNS Prosperity",
                "totalUsers": 20,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 20,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Marine Shanghai Limited",
                "vesselName": "JNS Sea",
                "totalUsers": 32,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Changsha",
                "totalUsers": 38,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Ganjiang",
                "totalUsers": 29,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 29,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Huaihua",
                "totalUsers": 14,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 12,
                "totalEnrolledUsers": 14,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Lianyungang",
                "totalUsers": 38,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Luzhou",
                "totalUsers": 32,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 24,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Maoming",
                "totalUsers": 18,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Shanggao",
                "totalUsers": 35,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Shaoyang",
                "totalUsers": 29,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 29,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Xiangtan",
                "totalUsers": 35,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL XINYU",
                "totalUsers": 32,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Xuchang",
                "totalUsers": 47,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 45,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Yangjiang",
                "totalUsers": 38,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Yangzhou",
                "totalUsers": 24,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL Zhangjiajie",
                "totalUsers": 24,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "CL ZHANJIANG",
                "totalUsers": 35,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "DIXON",
                "totalUsers": 8,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 7,
                "totalEnrolledUsers": 8,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "FUGA",
                "totalUsers": 21,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "Ocean Cadence",
                "totalUsers": 34,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "Ocean Diligence",
                "totalUsers": 18,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "SDTR Alice",
                "totalUsers": 47,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 46,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "SDTR Celeste",
                "totalUsers": 46,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 45,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "SDTR Doris",
                "totalUsers": 50,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 50,
                "totalEnrolledUsers": 50,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "SDTR Erica",
                "totalUsers": 25,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 25,
                "totalEnrolledUsers": 25,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "SDTR Faith",
                "totalUsers": 41,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "SDTR Gloria",
                "totalUsers": 33,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 33,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "SDTR Hera",
                "totalUsers": 55,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 54,
                "totalEnrolledUsers": 55,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "Shandong Fu Ren",
                "totalUsers": 36,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "Shandong Fu Xin",
                "totalUsers": 31,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 31,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "Shandong Fu Yi",
                "totalUsers": 49,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 48,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "Tambling",
                "totalUsers": 24,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "Xin Xiang Sea",
                "totalUsers": 17,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 17,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "XIN Zheng Sea",
                "totalUsers": 12,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 12,
                "totalEnrolledUsers": 12,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "XIN ZHI SEA",
                "totalUsers": 17,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 17,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "Zola",
                "totalUsers": 41,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "ZY Ningbo",
                "totalUsers": 13,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 13,
                "totalEnrolledUsers": 13,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maring Bulk Ptd Ltd",
                "vesselName": "ZY YULONG",
                "totalUsers": 16,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 16,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Ace Eternity",
                "totalUsers": 18,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Al Betroleya",
                "totalUsers": 45,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "AMIS Ace",
                "totalUsers": 20,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 20,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "AMIS Brave",
                "totalUsers": 27,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 27,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Amis fortune",
                "totalUsers": 21,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Amis Integrity",
                "totalUsers": 24,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Amis justice",
                "totalUsers": 36,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Amis Kalon",
                "totalUsers": 38,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Amis Leader",
                "totalUsers": 31,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 31,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Amis power",
                "totalUsers": 32,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Amis Wisdom I",
                "totalUsers": 27,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 27,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "AMIS Wisdom II",
                "totalUsers": 21,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Athens Bridge",
                "totalUsers": 35,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Bear Mountain Bridge",
                "totalUsers": 38,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Berge Nyangani",
                "totalUsers": 48,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Blue Grass Mariner",
                "totalUsers": 43,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Bluefin Pearl",
                "totalUsers": 40,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Bull Shark",
                "totalUsers": 30,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 30,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Bunun kalon",
                "totalUsers": 38,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Bunun Queen",
                "totalUsers": 28,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 28,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Bunun Wisdom",
                "totalUsers": 35,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Bunun XCEL",
                "totalUsers": 33,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 24,
                "totalEnrolledUsers": 33,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Bunun Youth",
                "totalUsers": 13,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 11,
                "totalEnrolledUsers": 13,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Bunun Zest",
                "totalUsers": 14,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 13,
                "totalEnrolledUsers": 14,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "BW Kizoku",
                "totalUsers": 52,
                "isPasswordResetTrue": 19,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 52,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "BW Messina",
                "totalUsers": 44,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 43,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "BW Yushi",
                "totalUsers": 51,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 46,
                "totalEnrolledUsers": 50,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "C. Earnest",
                "totalUsers": 40,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "C. Genuine",
                "totalUsers": 36,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Castara",
                "totalUsers": 36,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Clearocean ginkgo",
                "totalUsers": 34,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 2
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Clearocean Hickory",
                "totalUsers": 42,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 2
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Cntic Vpower Global",
                "totalUsers": 49,
                "isPasswordResetTrue": 13,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Coetivy",
                "totalUsers": 43,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Coral Pearl",
                "totalUsers": 45,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Corefortune OL",
                "totalUsers": 30,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 30,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Coreocean OL",
                "totalUsers": 27,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 25,
                "totalEnrolledUsers": 27,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Coresky OL",
                "totalUsers": 20,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 20,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Cristobal",
                "totalUsers": 46,
                "isPasswordResetTrue": 13,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "D&K Abdul Razzak Khalid Zaid Al-Khalid",
                "totalUsers": 41,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "D&K Yusuf I. AL-Ghanim",
                "totalUsers": 43,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Daiwan Hero",
                "totalUsers": 30,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 30,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Daiwan Infinity",
                "totalUsers": 25,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 25,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Daiwan Kalon",
                "totalUsers": 30,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 30,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Daiwan Wisdom",
                "totalUsers": 24,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Dee4 Ilex",
                "totalUsers": 36,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Dee4 Juniper",
                "totalUsers": 40,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 2
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Dee4 Kastania",
                "totalUsers": 40,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Dee4 Larch",
                "totalUsers": 45,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Dee4 Mahogany",
                "totalUsers": 39,
                "isPasswordResetTrue": 13,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 10,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Dee4 Nerium",
                "totalUsers": 41,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 2
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Dijilah",
                "totalUsers": 49,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 43,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Efficiency OL",
                "totalUsers": 30,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 30,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Emerald Express",
                "totalUsers": 47,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Eternity SW",
                "totalUsers": 43,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Evergreen Mariner",
                "totalUsers": 43,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Frontier Bonanza",
                "totalUsers": 42,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Frontier Mariner",
                "totalUsers": 37,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Gamsunoro",
                "totalUsers": 49,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Garnet Express",
                "totalUsers": 39,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Gas Antasena",
                "totalUsers": 35,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Gas Arjuna",
                "totalUsers": 36,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Gemini Pearl",
                "totalUsers": 46,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Augustus",
                "totalUsers": 42,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Bear",
                "totalUsers": 45,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 43,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Defender",
                "totalUsers": 39,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Endeavour",
                "totalUsers": 46,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Intrepid",
                "totalUsers": 46,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Liberty",
                "totalUsers": 41,
                "isPasswordResetTrue": 15,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 11,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Lion",
                "totalUsers": 42,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco London",
                "totalUsers": 42,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Ranger",
                "totalUsers": 52,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 47,
                "totalEnrolledUsers": 51,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Reliance",
                "totalUsers": 47,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Resolute",
                "totalUsers": 43,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Tiberius",
                "totalUsers": 51,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 46,
                "totalEnrolledUsers": 51,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Tiger",
                "totalUsers": 49,
                "isPasswordResetTrue": 10,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Genco Wolf",
                "totalUsers": 39,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "GH Kahlo",
                "totalUsers": 35,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "GH Madison",
                "totalUsers": 38,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Global Faith",
                "totalUsers": 17,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 17,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Globe Atlas",
                "totalUsers": 47,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Golden Kiku",
                "totalUsers": 29,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 29,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Great White",
                "totalUsers": 42,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Hourai Maru",
                "totalUsers": 45,
                "isPasswordResetTrue": 24,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 15,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Jacques",
                "totalUsers": 35,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "K. Ruby",
                "totalUsers": 38,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Karadeniz Lngt Powership Americas",
                "totalUsers": 27,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 27,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Karadeniz LNGT Powership Anatolia",
                "totalUsers": 25,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 25,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Karadeniz Lngt Powership Black Sea",
                "totalUsers": 24,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 23,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Karadeniz Lngt Powership Marmara",
                "totalUsers": 45,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Katagalan Ace",
                "totalUsers": 33,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 33,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Katagalan Brave",
                "totalUsers": 36,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Kirkuk",
                "totalUsers": 44,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 44,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Kmarin Regard",
                "totalUsers": 48,
                "isPasswordResetTrue": 11,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Kmarin Resolution",
                "totalUsers": 43,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Kmarin Resource",
                "totalUsers": 45,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Kmarin Respect",
                "totalUsers": 44,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Kmarin Rigour",
                "totalUsers": 48,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 43,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Lady Amanda",
                "totalUsers": 36,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Lone Star Mariner",
                "totalUsers": 36,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "LVM Aaron",
                "totalUsers": 41,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "LVM Warrior",
                "totalUsers": 45,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Magic Victoria",
                "totalUsers": 48,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 44,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Mersey",
                "totalUsers": 37,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "MH HOTAKA",
                "totalUsers": 23,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 23,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "MH Ibuki",
                "totalUsers": 22,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 22,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Mirai",
                "totalUsers": 44,
                "isPasswordResetTrue": 20,
                "isPasswordResetFalse": 24,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 9,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Moonbright SW",
                "totalUsers": 34,
                "isPasswordResetTrue": 16,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 13,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Naluhu",
                "totalUsers": 37,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Nexus Victoria",
                "totalUsers": 45,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Nord Copper",
                "totalUsers": 39,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Nord Karas",
                "totalUsers": 38,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Nord Kudu",
                "totalUsers": 15,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 12,
                "totalEnrolledUsers": 15,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Nord Majestic",
                "totalUsers": 39,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Nord Steel",
                "totalUsers": 22,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 22,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Nord Utopia",
                "totalUsers": 15,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 14,
                "totalEnrolledUsers": 15,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Nord Victor",
                "totalUsers": 34,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Nova Breeze",
                "totalUsers": 45,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Occitan Pauillac",
                "totalUsers": 41,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Ocean GLSR",
                "totalUsers": 31,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 31,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Ocean Pera",
                "totalUsers": 26,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 25,
                "totalEnrolledUsers": 26,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Orange Victoria",
                "totalUsers": 47,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 43,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pacific Diamond",
                "totalUsers": 36,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pacific Emerald",
                "totalUsers": 38,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pacific Garnet",
                "totalUsers": 41,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pacific Opal",
                "totalUsers": 38,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pacific Pearl",
                "totalUsers": 38,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pacific Ruby",
                "totalUsers": 35,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Paiwan Wisdom",
                "totalUsers": 21,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pelican Mariner",
                "totalUsers": 41,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pertamina Gas Amaryllis",
                "totalUsers": 39,
                "isPasswordResetTrue": 16,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 8,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Phoenix Gaia",
                "totalUsers": 40,
                "isPasswordResetTrue": 23,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 8,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pico Basile",
                "totalUsers": 34,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "PIS Prolific",
                "totalUsers": 35,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Poavosa Brave",
                "totalUsers": 38,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Poavosa Wisdom",
                "totalUsers": 22,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 22,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Poavosa Wisdom III",
                "totalUsers": 24,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Point Lisas",
                "totalUsers": 34,
                "isPasswordResetTrue": 11,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Princess Eternity",
                "totalUsers": 26,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 25,
                "totalEnrolledUsers": 26,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Princess Sapphire",
                "totalUsers": 13,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 11,
                "totalEnrolledUsers": 13,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Pro Onyx",
                "totalUsers": 43,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Redwood Mariner",
                "totalUsers": 47,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Sakizaya ACE",
                "totalUsers": 40,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Sakizaya Champion",
                "totalUsers": 21,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Sakizaya Respect",
                "totalUsers": 38,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Sakizaya Xcel",
                "totalUsers": 40,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Sanggau",
                "totalUsers": 47,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 44,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Scarlet Eagle",
                "totalUsers": 36,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Star River",
                "totalUsers": 34,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "SW Legend",
                "totalUsers": 37,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Taokas Wisdom",
                "totalUsers": 37,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Trammo Marycam",
                "totalUsers": 48,
                "isPasswordResetTrue": 15,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Trammo Paris",
                "totalUsers": 46,
                "isPasswordResetTrue": 10,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Tristar Courage",
                "totalUsers": 18,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Tristar Legend",
                "totalUsers": 17,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 17,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "True Conrad",
                "totalUsers": 26,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 26,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "True Neptune",
                "totalUsers": 20,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 19,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Tweed",
                "totalUsers": 36,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "UM Yoshino",
                "totalUsers": 24,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 24,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "White Allegra",
                "totalUsers": 39,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "White horse",
                "totalUsers": 33,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 33,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "White Pearl",
                "totalUsers": 27,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 25,
                "totalEnrolledUsers": 27,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "White star",
                "totalUsers": 38,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "Wisco Adventure",
                "totalUsers": 41,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "World Prize",
                "totalUsers": 32,
                "isPasswordResetTrue": 13,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 7,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Maritime Private Limited",
                "vesselName": "World Ruby",
                "totalUsers": 34,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Mideast Ship Management DMCC",
                "vesselName": "NCC Maha",
                "totalUsers": 48,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Mideast Ship Management DMCC",
                "vesselName": "NCC Qamar",
                "totalUsers": 51,
                "isPasswordResetTrue": 11,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 50,
                "usersStartedCourses": 9,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Ashoka",
                "totalUsers": 22,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 22,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Basset",
                "totalUsers": 39,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Bow Cheetah",
                "totalUsers": 44,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "BOW Lion",
                "totalUsers": 43,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Boxer",
                "totalUsers": 48,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Bulldog",
                "totalUsers": 41,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Chemocean Leo",
                "totalUsers": 36,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Chemocean Orion",
                "totalUsers": 38,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Chemroad Sakura",
                "totalUsers": 31,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 31,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "City Island",
                "totalUsers": 37,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Courage",
                "totalUsers": 46,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Cutlass Galaxy",
                "totalUsers": 48,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Fairchem Loyalty",
                "totalUsers": 46,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Fairchem Valor",
                "totalUsers": 51,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 51,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Ginga Copper",
                "totalUsers": 42,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Ginga Fortitude",
                "totalUsers": 47,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Ginga Jaguar",
                "totalUsers": 43,
                "isPasswordResetTrue": 11,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 7,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Glen Cove",
                "totalUsers": 47,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Halcyon",
                "totalUsers": 46,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "KYRA",
                "totalUsers": 37,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "MICA",
                "totalUsers": 39,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Nord Mariner",
                "totalUsers": 41,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Nord Master",
                "totalUsers": 40,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Nordic Copenhagen",
                "totalUsers": 41,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Nordic Marita",
                "totalUsers": 41,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Octonaut",
                "totalUsers": 43,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 43,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Opera",
                "totalUsers": 44,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Orchid Kefalonia",
                "totalUsers": 39,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Orchid Madeira",
                "totalUsers": 38,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Pusaka Borneo",
                "totalUsers": 37,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Rishiri Galaxy",
                "totalUsers": 52,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 45,
                "totalEnrolledUsers": 52,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Sakura Shuchi",
                "totalUsers": 45,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Shirayuki",
                "totalUsers": 27,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 27,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Takao Galaxy",
                "totalUsers": 45,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Trust Galaxy",
                "totalUsers": 48,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 43,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Tsukuba Galaxy",
                "totalUsers": 40,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "Tsurugi Galaxy",
                "totalUsers": 40,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UACC Manama",
                "totalUsers": 44,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UACC Mansouria",
                "totalUsers": 50,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 46,
                "totalEnrolledUsers": 50,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UACC Marah",
                "totalUsers": 47,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 45,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UACC Riyadh",
                "totalUsers": 49,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 45,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UACC Shamiya",
                "totalUsers": 50,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 46,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UOG Andros",
                "totalUsers": 50,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 45,
                "totalEnrolledUsers": 50,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UOG Ioannis V",
                "totalUsers": 45,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UOG Lamyra",
                "totalUsers": 38,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UOG OSLO",
                "totalUsers": 45,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Navis marine Private Limited",
                "vesselName": "UOG Stenies",
                "totalUsers": 43,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Aom Bianca",
                "totalUsers": 11,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 11,
                "totalEnrolledUsers": 11,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Aom Federica",
                "totalUsers": 16,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 16,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "AOM Marta",
                "totalUsers": 17,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 17,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Bastions",
                "totalUsers": 19,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 19,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Bellevue",
                "totalUsers": 18,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Bulk Ginza",
                "totalUsers": 14,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 13,
                "totalEnrolledUsers": 14,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Ehime Queen",
                "totalUsers": 16,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 16,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Emperor Pampero",
                "totalUsers": 16,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 16,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Empress Zonda",
                "totalUsers": 21,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Epic Radiance",
                "totalUsers": 18,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "First Delphinus",
                "totalUsers": 14,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 12,
                "totalEnrolledUsers": 14,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Frontier Wish",
                "totalUsers": 15,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 15,
                "totalEnrolledUsers": 15,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "GCL Mobile",
                "totalUsers": 10,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 10,
                "totalEnrolledUsers": 10,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Good Horizon",
                "totalUsers": 18,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Huge Kumano",
                "totalUsers": 18,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Lady Wynn",
                "totalUsers": 11,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 11,
                "totalEnrolledUsers": 11,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Lowlands Spirit",
                "totalUsers": 9,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 8,
                "totalEnrolledUsers": 9,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Lucky Queen",
                "totalUsers": 16,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 16,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Mettle Star",
                "totalUsers": 20,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 20,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Mia LR",
                "totalUsers": 20,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 20,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Nautical Queen",
                "totalUsers": 8,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 8,
                "totalEnrolledUsers": 8,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Nord Antares",
                "totalUsers": 13,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 13,
                "totalEnrolledUsers": 13,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Rosanna",
                "totalUsers": 12,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 12,
                "totalEnrolledUsers": 12,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Sakura Queen",
                "totalUsers": 18,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Sarah H",
                "totalUsers": 13,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 13,
                "totalEnrolledUsers": 13,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Selina H",
                "totalUsers": 9,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 8,
                "totalEnrolledUsers": 9,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Southern Hawk",
                "totalUsers": 9,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 9,
                "totalEnrolledUsers": 9,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Star Shibumi",
                "totalUsers": 10,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 10,
                "totalEnrolledUsers": 10,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ocean Maritime Inc.",
                "vesselName": "Zella Oldendorff",
                "totalUsers": 18,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "Advaita",
                "totalUsers": 54,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 50,
                "totalEnrolledUsers": 54,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "BW Birch",
                "totalUsers": 55,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 53,
                "totalEnrolledUsers": 55,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "BW Chinook",
                "totalUsers": 21,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "BW Elm",
                "totalUsers": 52,
                "isPasswordResetTrue": 10,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 51,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "BW Lord",
                "totalUsers": 48,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 44,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "BW Loyalty",
                "totalUsers": 45,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "BW Oak",
                "totalUsers": 41,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 2
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "BW Pampero",
                "totalUsers": 30,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 30,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "BW Pine",
                "totalUsers": 39,
                "isPasswordResetTrue": 15,
                "isPasswordResetFalse": 24,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "BW Tyr",
                "totalUsers": 51,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 46,
                "totalEnrolledUsers": 51,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "Etoile",
                "totalUsers": 18,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 17,
                "totalEnrolledUsers": 18,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "Lilac Victoria",
                "totalUsers": 41,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "MOJO",
                "totalUsers": 24,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "Natty",
                "totalUsers": 25,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 24,
                "totalEnrolledUsers": 25,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "World Diana",
                "totalUsers": 33,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 33,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Oceanic Services India Pvt Ltd",
                "vesselName": "World Virtue",
                "totalUsers": 25,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 25,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Onyx Marine Pvt Ltd,",
                "vesselName": "Bao Min",
                "totalUsers": 31,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 25,
                "totalEnrolledUsers": 31,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Onyx Marine Pvt Ltd,",
                "vesselName": "Global Harmony",
                "totalUsers": 39,
                "isPasswordResetTrue": 11,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 10,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Onyx Marine Pvt Ltd,",
                "vesselName": "Key Journey",
                "totalUsers": 28,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 25,
                "totalEnrolledUsers": 28,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Onyx Marine Pvt Ltd,",
                "vesselName": "MOL Earnest",
                "totalUsers": 47,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Onyx Marine Pvt Ltd,",
                "vesselName": "MOL Endowment",
                "totalUsers": 47,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 45,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Onyx Marine Pvt Ltd,",
                "vesselName": "MOL Presence",
                "totalUsers": 42,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Onyx Marine Pvt Ltd,",
                "vesselName": "MOL Proficiency",
                "totalUsers": 49,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 44,
                "totalEnrolledUsers": 49,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "APL California",
                "totalUsers": 37,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "APL Florida",
                "totalUsers": 36,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Ayoe",
                "totalUsers": 37,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Beagle",
                "totalUsers": 35,
                "isPasswordResetTrue": 13,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Blue Butterfly",
                "totalUsers": 37,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Cougar",
                "totalUsers": 40,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Glory",
                "totalUsers": 35,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 32,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Jaguar",
                "totalUsers": 39,
                "isPasswordResetTrue": 11,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Leopard",
                "totalUsers": 47,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Lynx",
                "totalUsers": 48,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Mercury",
                "totalUsers": 43,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Panther",
                "totalUsers": 46,
                "isPasswordResetTrue": 11,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Success",
                "totalUsers": 39,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Tiger",
                "totalUsers": 42,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bow Victory",
                "totalUsers": 45,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Bright Pioneer",
                "totalUsers": 46,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Cap San Artemissio",
                "totalUsers": 40,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Cap San Maleas",
                "totalUsers": 37,
                "isPasswordResetTrue": 10,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Cap San Sounio",
                "totalUsers": 40,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Cap San Tainaro",
                "totalUsers": 50,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 47,
                "totalEnrolledUsers": 50,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Cezanne",
                "totalUsers": 47,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 46,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Clearocean Mesquite",
                "totalUsers": 35,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Cristallina",
                "totalUsers": 21,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Degu",
                "totalUsers": 26,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 26,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Ever Gifted",
                "totalUsers": 50,
                "isPasswordResetTrue": 10,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 50,
                "usersStartedCourses": 8,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Ever Globe",
                "totalUsers": 43,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Ever Grade",
                "totalUsers": 36,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Ever Greet",
                "totalUsers": 48,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 41,
                "totalEnrolledUsers": 48,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Future Explorer",
                "totalUsers": 42,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Gas Planet",
                "totalUsers": 45,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Gas Stella",
                "totalUsers": 43,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Ginga Endurance",
                "totalUsers": 46,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Globe Frontier",
                "totalUsers": 42,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Globe IRIS",
                "totalUsers": 47,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 47,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Globe Polaris",
                "totalUsers": 43,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Golden Thetis",
                "totalUsers": 21,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Gordons Bay",
                "totalUsers": 27,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 18,
                "totalEnrolledUsers": 27,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Hakata Princess",
                "totalUsers": 44,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Honor Galaxy",
                "totalUsers": 38,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Jeffreys Bay",
                "totalUsers": 24,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Kamui Galaxy",
                "totalUsers": 35,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Acadia",
                "totalUsers": 32,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Biscayne",
                "totalUsers": 40,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Edirne",
                "totalUsers": 45,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 45,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk El Alto",
                "totalUsers": 42,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk El Banco",
                "totalUsers": 43,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 37,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk El Bosque",
                "totalUsers": 32,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 28,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk EL Palomar",
                "totalUsers": 37,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 34,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Emerald",
                "totalUsers": 39,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Eunapolis",
                "totalUsers": 39,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Eureka",
                "totalUsers": 41,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Everglades",
                "totalUsers": 43,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Glacier",
                "totalUsers": 42,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Mammoth",
                "totalUsers": 34,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Olympic",
                "totalUsers": 37,
                "isPasswordResetTrue": 6,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Redwood",
                "totalUsers": 36,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Saltoro",
                "totalUsers": 45,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 44,
                "totalEnrolledUsers": 44,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 1
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Sequoia",
                "totalUsers": 39,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 39,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Yellowstone",
                "totalUsers": 31,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 31,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Maersk Yosemite",
                "totalUsers": 32,
                "isPasswordResetTrue": 9,
                "isPasswordResetFalse": 23,
                "totalEnrolledUsers": 32,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "MH Daisen",
                "totalUsers": 28,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 26,
                "totalEnrolledUsers": 28,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "MH Konpira",
                "totalUsers": 31,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 31,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "MH Norikura",
                "totalUsers": 28,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 28,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Nord Mate",
                "totalUsers": 22,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 22,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Nord Valhalla",
                "totalUsers": 35,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Nord Valour",
                "totalUsers": 21,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 16,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Nord Vignale",
                "totalUsers": 38,
                "isPasswordResetTrue": 7,
                "isPasswordResetFalse": 31,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Nord Vulcan",
                "totalUsers": 35,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 30,
                "totalEnrolledUsers": 35,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "OOCL Brazil",
                "totalUsers": 41,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "OOCL Durban",
                "totalUsers": 43,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 38,
                "totalEnrolledUsers": 43,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Platinum Jubilee",
                "totalUsers": 44,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 42,
                "usersStartedCourses": 5,
                "usersWithNoEnrollment": 2
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Precious Adelaide",
                "totalUsers": 33,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 25,
                "totalEnrolledUsers": 33,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Precious Balboa",
                "totalUsers": 23,
                "isPasswordResetTrue": 3,
                "isPasswordResetFalse": 20,
                "totalEnrolledUsers": 23,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Sakura Voyager",
                "totalUsers": 46,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 42,
                "totalEnrolledUsers": 46,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Southern Leader",
                "totalUsers": 38,
                "isPasswordResetTrue": 11,
                "isPasswordResetFalse": 27,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Southern Resonance",
                "totalUsers": 22,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 21,
                "totalEnrolledUsers": 22,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Southern Respect",
                "totalUsers": 41,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 41,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Southern Reverence",
                "totalUsers": 37,
                "isPasswordResetTrue": 8,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 4,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Stena Conductor",
                "totalUsers": 37,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 35,
                "totalEnrolledUsers": 37,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Stena Conquest",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Stena Continent",
                "totalUsers": 21,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "Stena Convoy",
                "totalUsers": 34,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 29,
                "totalEnrolledUsers": 34,
                "usersStartedCourses": 2,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "UM Edo",
                "totalUsers": 23,
                "isPasswordResetTrue": 10,
                "isPasswordResetFalse": 13,
                "totalEnrolledUsers": 23,
                "usersStartedCourses": 6,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Pacific Private Limited",
                "vesselName": "UM Shimanto",
                "totalUsers": 24,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 24,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 11",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 13",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 19",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 41",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 42",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 505",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 506",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 507",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 508",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 509",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Synergy Ship Arabia Inspection Company LLC",
                "vesselName": "Jana 9",
                "totalUsers": 0,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 0,
                "totalEnrolledUsers": 0,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Wisdom Synergy Shipmanagement Pte Ltd",
                "vesselName": "AMIS XCEL",
                "totalUsers": 21,
                "isPasswordResetTrue": 2,
                "isPasswordResetFalse": 19,
                "totalEnrolledUsers": 21,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Wisdom Synergy Shipmanagement Pte Ltd",
                "vesselName": "AMIS Youth",
                "totalUsers": 26,
                "isPasswordResetTrue": 4,
                "isPasswordResetFalse": 22,
                "totalEnrolledUsers": 26,
                "usersStartedCourses": 3,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Wisdom Synergy Shipmanagement Pte Ltd",
                "vesselName": "Mega Benefit",
                "totalUsers": 36,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 36,
                "totalEnrolledUsers": 36,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Wisdom Synergy Shipmanagement Pte Ltd",
                "vesselName": "Paiwan Ace",
                "totalUsers": 38,
                "isPasswordResetTrue": 5,
                "isPasswordResetFalse": 33,
                "totalEnrolledUsers": 38,
                "usersStartedCourses": 1,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Wisdom Synergy Shipmanagement Pte Ltd",
                "vesselName": "Sakizaya justice",
                "totalUsers": 40,
                "isPasswordResetTrue": 1,
                "isPasswordResetFalse": 39,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            },
            {
                "companyName": "Wisdom Synergy Shipmanagement Pte Ltd",
                "vesselName": "Sakizaya Unicorn",
                "totalUsers": 40,
                "isPasswordResetTrue": 0,
                "isPasswordResetFalse": 40,
                "totalEnrolledUsers": 40,
                "usersStartedCourses": 0,
                "usersWithNoEnrollment": 0
            }
        ]

// Function to generate Excel file
function vesselWiseUserStats(data) {
  // Calculate totals for numeric fields
  const totals = data.reduce(
    (acc, curr) => {
      acc.totalUsers += curr.totalUsers || 0;
      acc.isPasswordResetTrue += curr.isPasswordResetTrue || 0;
      acc.isPasswordResetFalse += curr.isPasswordResetFalse || 0;
      acc.totalEnrolledUsers += curr.totalEnrolledUsers || 0;
      acc.usersStartedCourses += curr.usersStartedCourses || 0;
      acc.usersWithNoEnrollment += curr.usersWithNoEnrollment || 0;
      return acc;
    },
    {
      companyName: "Total",
      vesselName: "",
      totalUsers: 0,
      isPasswordResetTrue: 0,
      isPasswordResetFalse: 0,
      totalEnrolledUsers: 0,
      usersStartedCourses: 0,
      usersWithNoEnrollment: 0,
    }
  );

  // Add totals row
  const finalData = [...data, totals];

  // Convert to worksheet and workbook
  const ws = XLSX.utils.json_to_sheet(finalData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Vessels Summary");

  // Write to file
  XLSX.writeFile(wb, "vessel_summary.xlsx");

  console.log("✅ Excel file created: vessel_summary.xlsx");
}

// Run function
vesselWiseUserStats(data);
