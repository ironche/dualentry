CREATE TABLE companies(id SERIAL PRIMARY KEY, name VARCHAR(256) NOT NULL, location VARCHAR(256));


INSERT INTO companies (name, location) VALUES
('3M Company', 'Minnesota'),
('Abbott Laboratories', 'Illinois'),
('AbbVie Inc.', 'Illinois'),
('Abiomed Inc.', 'Massachusetts'),
('Accenture plc', 'Ireland'),
('Activision Blizzard', 'California'),
('Adobe Inc.', 'California'),
('Advanced Micro Devices Inc', 'California'),
('Advance Auto Parts', 'Virginia'),
('AES Corp', 'New York'),
('Aflac Inc', 'Georgia'),
('Agilent Technologies Inc', 'California'),
('Air Products & Chemicals Inc', 'Pennsylvania'),
('Akamai Technologies Inc', 'Massachusetts'),
('Alaska Air Group Inc', 'Washington'),
('Albemarle Corp', 'North Carolina'),
('Alexandria Real Estate Equities', 'California'),
('Alexion Pharmaceuticals', 'Massachusetts'),
('Align Technology', 'California'),
('Allegion', 'Dublin'),
('Alliant Energy Corp', 'Wisconsin'),
('Allstate Corp', 'Illinois'),
('Alphabet Inc. (Class A)', 'California'),
('Alphabet Inc. (Class C)', 'California'),
('Altria Group Inc', 'Virginia'),
('Amazon.com Inc.', 'Washington'),
('Amcor plc', 'Switzerland'),
('Ameren Corp', 'Missouri'),
('American Airlines Group', 'Texas'),
('American Electric Power', 'Ohio'),
('American Express Co', 'New York'),
('American International Group', 'New York'),
('American Tower Corp.', 'Massachusetts'),
('American Water Works Company Inc', 'New Jersey'),
('Ameriprise Financial', 'Minnesota'),
('AmerisourceBergen Corp', 'Pennsylvania'),
('AMETEK Inc.', 'Pennsylvania'),
('Amgen Inc.', 'California'),
('Amphenol Corp', 'Massachusetts'),
('Analog Devices, Inc.', 'Massachusetts'),
('ANSYS', 'Pennsylvania'),
('Anthem', 'Indiana'),
('Aon plc', 'United Kingdom'),
('A.O. Smith Corp', 'Wisconsin'),
('APA Corporation', 'Texas'),
('Apple Inc.', 'California'),
('Applied Materials Inc.', 'California'),
('Aptiv PLC', 'Ireland'),
('Archer-Daniels-Midland Co', 'Illinois'),
('Arista Networks', 'California'),
('Arthur J. Gallagher & Co.', 'Illinois'),
('Assurant', 'New York'),
('AT&T Inc.', 'Texas'),
('Atmos Energy Corp', 'Texas'),
('Autodesk Inc.', 'California'),
('AutoZone Inc', 'Tennessee'),
('AvalonBay Communities', 'Virginia'),
('Avery Dennison Corp', 'California'),
('Baker Hughes Co', 'Texas'),
('Ball Corp', 'Colorado'),
('Bank of America Corp', 'North Carolina'),
('Baxter International Inc.', 'Illinois'),
('Becton Dickinson', 'New Jersey'),
('Berkshire Hathaway', 'Nebraska'),
('Best Buy Co. Inc.', 'Minnesota'),
('Biogen Inc.', 'Massachusetts'),
('BlackRock', 'New York'),
('Boeing Company', 'Illinois'),
('Booking Holdings Inc', 'Connecticut'),
('BorgWarner', 'Michigan'),
('Boston Properties', 'Massachusetts'),
('Boston Scientific', 'Massachusetts'),
('Bristol Myers Squibb', 'New York'),
('Broadcom Inc.', 'California'),
('Broadridge Financial Solutions', 'New York'),
('Brown-Forman Corp.', 'Kentucky'),
('C.H. Robinson Worldwide', 'Minnesota'),
('Cabot Oil & Gas', 'Texas'),
('Cadence Design Systems', 'California'),
('Caesars Entertainment', 'Nevada'),
('Campbell Soup', 'New Jersey'),
('Capital One Financial', 'Virginia'),
('Cardinal Health Inc.', 'Ohio'),
('Carmax Inc', 'Virginia'),
('Carnival Corp.', 'Florida'),
('Carrier Global', 'Florida'),
('Catalent', 'New Jersey'),
('Caterpillar Inc.', 'Illinois'),
('Cboe Global Markets', 'Illinois'),
('CBRE Group', 'California'),
('CDW', 'Illinois'),
('Celanese', 'Texas'),
('Centene Corporation', 'Missouri'),
('CenterPoint Energy', 'Texas'),
('CenturyLink Inc', 'Louisiana'),
('Cerner', 'Missouri'),
('CF Industries Holdings Inc', 'Illinois'),
('Charles River Laboratories', 'Massachusetts'),
('Charles Schwab Corporation', 'California'),
('Charter Communications', 'Connecticut'),
('Chevron Corp.', 'California'),
('Chipotle Mexican Grill', 'California'),
('Chubb Limited', 'Switzerland'),
('Church & Dwight', 'New Jersey'),
('Cigna', 'Connecticut'),
('Cincinnati Financial', 'Ohio'),
('Cintas Corporation', 'Ohio'),
('Cisco Systems', 'California'),
('Citigroup Inc.', 'New York'),
('Citizens Financial Group', 'Rhode Island'),
('Citrix Systems', 'Florida'),
('Clorox Company', 'California'),
('CME Group Inc.', 'Illinois'),
('CMS Energy', 'Michigan'),
('Coca-Cola Company', 'Georgia'),
('Cognizant Technology Solutions', 'New Jersey'),
('Colgate-Palmolive', 'New York'),
('Comcast Corp.', 'Pennsylvania'),
('Comerica Inc.', 'Texas'),
('Conagra Brands', 'Illinois'),
('Concho Resources', 'Texas'),
('ConocoPhillips', 'Texas'),
('Consolidated Edison', 'New York'),
('Constellation Brands', 'New York'),
('Copart Inc', 'Texas'),
('Corning Inc.', 'New York'),
('Corteva', 'Delaware'),
('Costco Wholesale Corp.', 'Washington'),
('Crown Castle International Corp.', 'Texas'),
('CSX Corp.', 'Florida'),
('Cummins Inc.', 'Indiana'),
('CVS Health', 'Rhode Island'),
('D. R. Horton', 'Texas'),
('Danaher Corp.', 'Washington'),
('Darden Restaurants', 'Florida'),
('DaVita Inc.', 'Colorado'),
('Deere & Co.', 'Illinois'),
('Delta Air Lines Inc.', 'Georgia'),
('Dentsply Sirona', 'Pennsylvania'),
('Devon Energy', 'Oklahoma'),
('DexCom', 'California'),
('Diamondback Energy', 'Texas'),
('Digital Realty Trust', 'California'),
('Discover Financial Services', 'Illinois'),
('Discovery, Inc.', 'New York'),
('Dish Network', 'Colorado'),
('Dollar General', 'Tennessee'),
('Dollar Tree', 'Virginia'),
('Dominion Energy', 'Virginia'),
('Domino''s Pizza', 'Michigan'),
('Dover Corporation', 'Illinois'),
('Dow Inc.', 'Michigan'),
('DTE Energy Co.', 'Michigan'),
('Duke Energy', 'North Carolina'),
('Duke Realty Corp', 'Indiana');


CREATE TABLE clients(id SERIAL PRIMARY KEY, first_name VARCHAR(256), last_name VARCHAR(256), companyid INT NOT NULL, FOREIGN KEY(companyid) REFERENCES companies(id));


INSERT INTO clients (first_name, last_name, companyid)
SELECT DISTINCT
    ('[0:9]={"Daniele","Debora","Mattia","Jake","Amy","Henry","Neil","Tim","John","George"}'::text[])
	    [floor(random()*10)] first_name,
    ('[0:9]={"Rossi","Verdi","Gialli","Caponi","Gallini","Gatti","Ford","Daniel","Harrison","Macdonald"}'::text[])
	    [floor(random()*10)] last_name,
    (RANDOM() * 100 + 1)::INT AS companyid
  FROM
    generate_series(1, 50);


CREATE TABLE invoices(id SERIAL PRIMARY KEY, issue_date DATE NOT NULL DEFAULT CURRENT_DATE, due_date DATE NOT NULL DEFAULT CURRENT_DATE, transaction VARCHAR(64), total DECIMAL(10, 6), currency CHAR(3), exchange DECIMAL(10, 6), clientid INT NOT NULL, FOREIGN KEY(clientid) REFERENCES clients(id));


INSERT INTO invoices (issue_date, due_date, transaction, total, currency, exchange, clientid)
SELECT
    CURRENT_DATE - INTERVAL '10 days' * random() AS issue_date,
    CURRENT_DATE + INTERVAL '20 days' * random() AS due_date,
    CONCAT('I-', LPAD(floor(random() * 100000)::TEXT, 6, '0')) AS transaction,
    ROUND(cast(random() * 1000 as numeric), 2) AS total,
    CASE
        WHEN random() < 0.5 THEN 'USD'
        ELSE 'EUR'
    END AS currency,
    ROUND(cast(random() * 2 as numeric), 6) AS exchange,
    (random() * 49 + 1)::INT AS clientid
  FROM
    generate_series(1, 300) AS id;


-- DROP TABLE invoices;
-- DROP TABLE clients;
-- DROP TABLE companies;
